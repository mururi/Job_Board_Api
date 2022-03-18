import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetHouseService {
  api_url = 'https://jobs-buddy-api.herokuapp.com/'
  

  constructor(public http: HttpClient) { }
  
  get_jobs(): Observable<any>{
    return this.http.get(this.api_url);
  }
}
