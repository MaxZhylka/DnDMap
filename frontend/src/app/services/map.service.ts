import { Injectable } from '@angular/core';
import {environment} from "../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MapService {
 private mapSubject = new BehaviorSubject<any>(null);
  baseurl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  setMap(map: any) {
    this.mapSubject.next(map);
  }



  flyTo(coordinates: string) {
    this.mapSubject.value.flyTo(coordinates.split(',').map(Number), 4);
  }
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
