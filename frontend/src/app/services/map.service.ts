import {ElementRef, Injectable} from '@angular/core';
import {environment} from "../../environments/environments";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MapService {
 private mapSubject = new BehaviorSubject<any>(null);
 baseurl = environment.apiUrl;
 ignoredElement:ElementRef[]=[];
  constructor(private http: HttpClient) { }


  setMap(map: any) {
    this.mapSubject.next(map);
  }



flyTo(coordinates: string) {
  // Отключаем взаимодействие с картой
  this.mapSubject.value.dragging.disable();
  this.mapSubject.value.scrollWheelZoom.disable();
  this.mapSubject.value.touchZoom.disable();
  this.mapSubject.value.doubleClickZoom.disable();
  this.mapSubject.value.boxZoom.disable();
  this.mapSubject.value.keyboard.disable();


  const animationDuration = 2000;

  // Запускаем анимацию flyTo с указанными параметрами
  this.mapSubject.value.flyTo(coordinates.split(',').map(Number), 4, { duration: animationDuration / 1000 });


  setTimeout(() => {
    this.mapSubject.value.dragging.enable();
    this.mapSubject.value.scrollWheelZoom.enable();
    this.mapSubject.value.touchZoom.enable();
    this.mapSubject.value.doubleClickZoom.enable();
    this.mapSubject.value.boxZoom.enable();
    this.mapSubject.value.keyboard.enable();
  }, animationDuration);
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
getSeaRoads(): Observable<any> {
    return this.http.get<any>(this.baseurl+'/api/seaRoads/')
  }

  setInWay(characterData: any,id:number): Observable<any> {
    if(characterData.id == -1) {
      return throwError(() => new Error('Некорректный ID'));
    }
    const url = `http://127.0.0.1:8000/registration/update-way/${id}/`;
    return this.http.put(url, characterData, {
      headers: new HttpHeaders({
        'Authorization': `Token ${localStorage.getItem('auth_token')}`,
        'Content-Type': 'application/json'
      })
    });
  }


updateCoins(characterData: any, id: number): Observable<any> {
    if (id == -1) {
        return throwError(() => new Error('Некорректный ID'));
    }
    const url = `http://127.0.0.1:8000/registration/update-coins/${id}/`;
    return this.http.put(url, characterData, {
        headers: new HttpHeaders({
            'Authorization': `Token ${localStorage.getItem('auth_token')}`,
            'Content-Type': 'application/json'
        })
    });
}

}
