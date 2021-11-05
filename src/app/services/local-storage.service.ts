import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  currentCustomer:string="";
  tokenKey = "token"
  constructor() { }

  getItem(token:string){
    return localStorage.getItem(token);
   }

   clean(){
     localStorage.clear()
   }

   saveToken(value: string) {
    localStorage.removeItem('token');
    localStorage.setItem('token', value);
    console.log(value)
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}
