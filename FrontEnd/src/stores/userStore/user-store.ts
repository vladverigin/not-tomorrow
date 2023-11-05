import {defineStore} from "pinia";
import {UserStore} from "stores/userStore/models";

const useUserStore = defineStore('user', {
  state: ():UserStore => ({
    firstname: '',
    lastname: '',
    email: '',
    isAuth:false,
    token:'',
  }),
  getters: {
    isLogin: (state) => state.isAuth,
  },
  actions: {
    async login() {
      console.log('login')
    },
    async checking() {
      console.log('checking')
      const savedToken = localStorage.getItem('api-token');
      if(savedToken == null || savedToken == ''){
        return this.logout();
      }
      const isStillValid = await this.checkIfTokenStillValid();
      if(!isStillValid) {
        this.logout()
      }
    },
    logout(){
      this.changeToken(null);
      this.isAuth = false;
    },
    changeToken(newToken:string|null){
      this.token = newToken;
      localStorage.setItem('api-token', newToken || '');
    },
    async checkIfTokenStillValid():Promise<boolean>{
      console.log('checkIfTokenStillValid')
      return false;
    }
  },
});
export default useUserStore;
