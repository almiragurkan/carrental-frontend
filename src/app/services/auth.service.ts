import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { UserModel } from '../models/userModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:44387/api/auth';
  name: string = "";
  surname:string="";
  role:any;
  roles: any[] = [];
  token: any;
  isLoggedIn: boolean = false;
  userId: number;
  email:string;

  constructor(private httpClient:HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService,
    private localStorageService: LocalStorageService) { }

    login(loginModel:LoginModel): Observable<SingleResponseModel<TokenModel>> {
      let newPath=this.apiUrl+"/login";
      return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,loginModel)


    }
    register(registerModel:RegisterModel): Observable<SingleResponseModel<RegisterModel>> {
      let newPath=this.apiUrl+"/register";
      return this.httpClient.post<SingleResponseModel<RegisterModel>>(newPath,registerModel)
    }

    update(userModel:UserModel): Observable<SingleResponseModel<UserModel>> {
      let newPath=this.apiUrl+"/update";
      return this.httpClient.post<SingleResponseModel<UserModel>>(newPath,userModel)
    }

    isAuthenticated(){
      if(localStorage.getItem("token")){
        return true
      }
      else{
        return false;
      }
    }

    roleCheck(roleList: string[]) {
      if (this.roles !== null) {
        roleList.forEach(role => {
          if (this.roles.includes(role)) {
            return true;
          } else {
            return false;
          }
        })
        return true;
      } else {
        return false;
      }
    }

    logout(){
      localStorage.clear();
      this.onRefresh();
      this.router.navigateByUrl('/');

    }

    async onRefresh() {
      this.router.routeReuseStrategy.shouldReuseRoute = function () { return false }
      const currentUrl = this.router.url + '?'
      return this.router.navigateByUrl(currentUrl).then(() => {
        this.router.navigated = false
        this.router.navigate([this.router.url])
      })
    }

    userDetailFromToken(){
      this.token = this.localStorageService.getToken();
      //console.log(this.token);
      let decodedToken = this.jwtHelper.decodeToken(this.token);
      let name = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      this.name = name.split(' ')[0];
      let surname = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      this.surname = name.split(' ')[1];
      this.roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      this.role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      this.userId =parseInt(decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']);
      this.email=decodedToken["email"];
    }
}
