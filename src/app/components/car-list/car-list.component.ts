import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],

})
export class CarListComponent implements OnInit {

  cars:Car[]=[];

  constructor(private carService:CarService,  private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{


     if (params["brandId"] && params["colorId"]) {
       this.getCarDetails(params["brandId"],params["colorId"]);
     }
     else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }

      else{
        this.getCars()

      }
    })
   }

   getCars(){
     this.carService.getCars().subscribe(response=>{
       this.cars=response.data;
     })
   }

   getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe(response => {
       this.cars = response.data;


    });
 }


   getCarsByBrand(brandId:number){
     this.carService.getCarsByBrand(brandId).subscribe(response=>{
       this.cars=response.data;
     })
   }
   getCarsByColor(colorId:number){
     this.carService.getCarsByColor(colorId).subscribe(response=>{
       this.cars=response.data;
     })
   }

   getCarDetails(brandId:number, colorId:number){
     this.carService.getCarsDetails(brandId, colorId).subscribe(response => {
       this.cars = response.data;

     })
   }

 }