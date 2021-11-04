import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44387/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+ "carsDetailsByBrandId?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);

  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+ "cars/getcarsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);

  }
  getCarsDetails(brandId:number,colorId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getfilter?brandId=+" + brandId + "&colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/GetCarDetailsById?carId=" + carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath); 
  }

  add(car:Car):Observable<ListResponseModel<Car>>{
    return this.httpClient.post<ListResponseModel<Car>>(this.apiUrl+"cars/add",car);
  }
  update(car:Car):Observable<ListResponseModel<Car>>{
    return this.httpClient.post<ListResponseModel<Car>>(this.apiUrl+"cars/update",car);
  }
}