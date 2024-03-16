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
  getCategory(): Observable<any> {
    return this.http.get<any>(this.baseurl+'/api/map/')
  }
}
