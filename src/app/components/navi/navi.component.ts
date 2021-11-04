import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  control: any;

  constructor(public authService:AuthService,
    private toastrService:ToastrService,
    private localStorageService: LocalStorageService,
      private router: Router) { }

  user: User;
  filterText="";

  ngOnInit(): void {
    if(this.isAuthenticated()){
      this.authService.userDetailFromToken();
        
    } 
  }

isAuthenticated(){
  if(this.authService.isAuthenticated()){
    return true
  }
  else{
    return false
  }
}

logout() {
  this.localStorageService.removeToken();

  return this.router.navigate(["/login"]);
}



}
