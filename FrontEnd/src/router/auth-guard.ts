import useUserStore from "stores/userStore/user-store";
import {NavigationGuardNext, RouteLocationNormalized} from "vue-router";
import router from "src/router/index";

const guard = function (to:RouteLocationNormalized, from:RouteLocationNormalized, next:NavigationGuardNext) {
  const userStore = useUserStore();

  if(to.meta.requiresAuth && !userStore.isLogin) {
    console.log('should be login')
    userStore.router.push({
      name: 'login',
      params: {
        returnTo: to.path,
      },
    });
  }
  next()
}

export default guard;
