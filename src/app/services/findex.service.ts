import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Findex } from '../models/findex';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FindexService {
  apiUrl = 'https://localhost:44387/api/findex/';
  constructor(private httpClient: HttpClient) { }

  getFindexScoreByUserId(userId:number):Observable<ListResponseModel<Findex>>{
    let newPath=this.apiUrl+"findex/getallbyuserid?userId="+userId
    return this.httpClient.get<ListResponseModel<Findex>>(newPath);

  }
}
