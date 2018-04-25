/**
 * @author : wenhao.huang
 * @date   : 2018/3/20
 * @project: server app.js
 */

const fs = require('fs')
const path = require('path')
const LRU = require('lru-cache')
const express = require('express')
const compression = require('compression')
const microcache = require('route-cache')
const chalk = require('chalk')
const bodyParser = require("body-parser")
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const cookieParser = require('cookie-parser')

const resolve = file => path.resolve(__dirname, file)
const {createBundleRenderer} = require('vue-server-renderer')

const $config = require('./config/server.json');

const isProd = process.env.NODE_ENV != 'dev'

const useMicroCache = isProd

const serverInfo =
    `express/${require('express/package.json').version} ` +
    `vue-server-renderer/${require('vue-server-renderer/package.json').version}`


const app = express()
const PORT = 6012

const cache = LRU({
    max: 1000,
    maxAge: 1000 * 60 * 15
})

let renderer
let readyPromise
const templatePath = resolve('./src/index.template.html')

function createRenderer(bundle, options) {
    return createBundleRenderer(bundle, Object.assign(options, {
        cache: cache,
        basedir: resolve('./dist'),
        runInNewContext: false
    }))
}

function render(req, res) {
    const s = Date.now()

    res.setHeader("Content-Type", "text/html")
    res.setHeader("Server", serverInfo)

    const handleError = err => {
        if (err.url) {
            res.redirect(err.url)
        } else if (err.errorCode === 404) {
            res.status(404).send('404 | Page Not Found')
        } else {
            res.status(500).send('500 | Internal Server Error')
            console.error(`error during render : ${req.url}`)
        }
    }

    const context = {
        title: '专注前端开发',
        url: req.url
    }
    renderer.renderToString(context, (err, html) => {
        if (err) {
            return handleError(err)
        }
        res.send(html)
        if (!isProd) {
            console.log(`whole request: ${Date.now() - s}ms`)
        }
    })
}

if (isProd) {
    const template = fs.readFileSync(templatePath, 'utf-8')
    const bundle = require('./dist/vue-ssr-server-bundle.json')
    const clientManifest = require('./dist/vue-ssr-client-manifest.json')
    renderer = createRenderer(bundle, {
        template,
        clientManifest
    })
} else {
    readyPromise = require('./build/setup-dev-server')(
        app,
        templatePath,
        (bundle, options) => {
            renderer = createRenderer(bundle, options)
        }
    )
}

class Server {
    serve(path, cache) {
        return express.static(resolve(path), {
            maxAge: cache && useMicroCache ? 1000 * 60 * 60 * 24 * 30 : 0
        })
    }

    start() {

        app.set('trust proxy', 1)
        app.use(compression({threshold: 0}))

        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
        app.use(cookieParser('node-web'));

        app.use('/dist', this.serve('./dist', true))
        app.use('/static', this.serve('./static', true))
        app.use('/manifest.json', this.serve('./manifest.json', true))
        app.use('/service-worker.js', this.serve('./dist/service-worker.js'))

        app.use(microcache.cacheSeconds(1, req => useMicroCache && req.originalUrl))

        // const routerServer = require('./server/router/index.js')
        // app.post('/api', routerServer.server)

        app.get('*', isProd ? render : (req, res) => {
            readyPromise.then(() => render(req, res))
        })

        app.listen(PORT, () => {
            console.log(
                chalk.gray('------------------------------------') + '\n' +
                chalk.green('PC官网系统启动 ') + chalk.cyan('SUCCESS') + '\n' +
                chalk.green('端口           ') + chalk.cyan(PORT) + '\n' +
                chalk.green('当前所处       ') + chalk.cyan('开发环境') + '\n' +
                chalk.gray('------------------------------------')
            )
        });
    }
}

const server = new Server()
server.start()
