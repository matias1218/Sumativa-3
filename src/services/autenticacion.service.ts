import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {


  userApp = "user";
  pwApp = "user";
  isAuthenticated = false;

  
  constructor() { }

  login(user:string,pw:string){
    if(user == this.userApp && pw == this.pwApp){
      this.isAuthenticated = true;
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    this.isAuthenticated = false;
  }
}
