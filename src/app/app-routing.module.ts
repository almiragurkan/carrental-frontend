import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandUpdateDeleteComponent } from './components/brand-update-delete/brand-update-delete.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [  
{path:"",pathMatch:"full", component:CarComponent},
{path:"cars", component:CarComponent},
{path:"cars/brands/:brandId", component:CarComponent},
{path:"cars/colors/:colorId", component:CarComponent},
{path:"cardetail/rental/:carId",component:RentalAddComponent,canActivate:[LoginGuard]},
{path:"cars/car-detail/:carId", component:CardetailComponent},
{path:"carlist",component:CarListComponent},
{path:"car-add",component:CarAddComponent,canActivate:[LoginGuard]},
{path:"carlist/update/:carId", component: CarUpdateComponent },
{path:"cars/rental/:id",component:RentalComponent},
{path:"cars/filter/:brandId/:colorId",component:CarComponent},
{path:"cars/rental/:id",component:RentalComponent},
{path:"cars/filter/:brandId",component:CarComponent},
{path:"cars/filter/:colorId",component:CarComponent},
{path:"payments", component:PaymentComponent},
{path:"brand-add", component:BrandAddComponent},
{path:"brandlist/update/:brandId", component:BrandUpdateDeleteComponent},
{path:"login",component:LoginComponent},
{path:"account",component:AccountComponent},
{path:"color-add",component:ColorAddComponent},
{path:"colorlist/update/:colorId",component:ColorUpdateComponent},
{path:"colorlist",component:ColorListComponent},
{path:"brandlist",component:BrandListComponent}
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
