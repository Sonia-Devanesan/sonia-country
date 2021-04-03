import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryserviceService {

  constructor(private http : HttpClient ) { 

 

  }
  get(url){
    let baseurl = environment.apiUrl + url;
    return this.http.get(baseurl);
  }

 

  post(url,data){
    let baseurl = environment.apiUrl + url;
    return this.http.post(baseurl, data);
  }
}