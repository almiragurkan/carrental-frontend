import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/creditCard';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  apiUrl = 'https://localhost:44387/api/';

  constructor( private httpClient:HttpClient) { }

  add(creditCard:CreditCard):Observable<ResponseModel>{
    let newPath=this.apiUrl+"cerditCards/add"
    return this.httpClient.post<ResponseModel>(newPath,creditCard)
   }

  getCreditCardByUserId(userId:number):Observable<ListResponseModel<CreditCard>>{
    let newPath=this.apiUrl+"creditCards/getallbyuserid?userId="+userId
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);

  }

}