import { Injectable } from '@angular/core';
import {environment} from "../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MapService {

  baseurl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getCities(): Observable<any> {
    return this.http.get<any>(this.baseurl+'/api/cities/')
  }
  getRoads(): Observable<any> {
    return this.http.get<any>(this.baseurl+'/api/roads/')
  }
  getNews(): Observable<any> {
    return this.http.get<any>(this.baseurl+'/api/news/')
  }
}
