import Router from 'vue-router'

import routes from './routes';

const router = new Router({
  routes: routes
});

router.beforeEach((to,from,next)=>{
  document.title = to.meta.title;
  next();
});

/*router.afterEach((route)=>{
  //
});*/

export default router;
