import {defineStore} from "pinia";
import {UserCredentials, UserStore} from "stores/userStore/models";
import {api} from "boot/axios";

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
    async login(data:UserCredentials) {
      const res = await api.post('/auth/login',{
        email: data.email,
        password: data.password,
      });
      if(res.data.access_token) {
        this.changeToken(res.data.access_token);
        await this.checking();
        if(this.isLogin) {
          this.router.push('/')
        }
      }
    },
    async checking() {
      console.log('checking')
      const savedToken = localStorage.getItem('api-token');
      this.changeToken(savedToken);
      if(savedToken == null || savedToken == ''){
        return this.logout();
      } else {
        this.isAuth = true;
      }
      const isStillValid = await this.getUserInfo();
      if(!isStillValid) {
        this.logout()
      }
    },
    logout(){
      this.changeToken(null);
      this.isAuth = false;
      this.router.push('/auth/login')
    },
    changeToken(newToken:string|null){
      this.token = newToken;
      localStorage.setItem('api-token', newToken || '');
    },
    async getUserInfo():Promise<boolean>{
      const res = await api.get('/auth/profile');
      if(res.data.username) {
        this.firstname = res.data.username;
        this.isAuth = true;
        return true;
      }
      return false;
    }
  },
});
export default useUserStore;
