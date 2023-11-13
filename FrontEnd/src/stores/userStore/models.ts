export interface UserStore {
  firstname: string,
  lastname: string,
  email: string,
  isAuth:boolean,
  token:string|null,
}


export interface UserCredentials {
  email:string,
  password:string;
}
