import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:44387/api/brands/getall';
  apiUrl2='https://localhost:44387/api/';

  constructor(private httpClient: HttpClient) {}
  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }

  getById(brandId: number): Observable<SingleResponseModel<Brand>> {
    let newPath = this.apiUrl2 +"brands/getbyid?id="+brandId;
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }


  add(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl2 + "brands/add";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }


  delete(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl2 + "brands/delete";
    return this.httpClient.post<ResponseModel>(newPath,brand)
  }

  update(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl2 + "brands/update";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }
}