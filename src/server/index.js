/**
 * @author : wenhao.huang
 * @date   : 2018/1/27
 */
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const log = console.log;
const logger = require('morgan');
const ip = require('ip');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const app = express();

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware')
//这里指向 vue-cli 拷贝过来的配置文件
const config = require('../../build/webpack.dev.conf');

const configServer = {
    host: ip.address(),
    port: 3000
}
class Server {
    async start() {
        await this._init();
    }
    async _init() {
        // app.set('views', path.join(__dirname, './client/dist'));
        // app.set('view engine', 'ejs');

        app.use(logger('dev'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(cookieParser());

        app.use('/', express.static(path.join(__dirname, 'public')));

        const compiler = webpack(config)
        app.use(webpackDevMiddleware(compiler, {
            publicPath: config.output.publicPath,
            stats: {colors: true}
        }))
        app.use(webpackHotMiddleware(compiler))
        // 引用最后的静态文件
        app.use(express.static(path.join(__dirname, 'views')))
        // router
        app.get('/', function (req, res) {
            res.sendFile('./views/index.html')
        })
        app.use(function (req, res, next) {
            var err = new Error('Not Found')
            err.status = 404
            next(err)
        })
        app.use(function (err, req, res, next) {
            res.status(err.status || 500)
            res.send(err.message)
        })
        app.listen(configServer.port, configServer.host, () => {
            log(chalk.gray(` -------------------------------------`));
            log(chalk.green(`Server: `) + chalk.magenta('http://%s:%s'), configServer.host, configServer.port);
            log(chalk.gray(` -------------------------------------`));
        })
    }
}
const server = new Server();
server.start();
