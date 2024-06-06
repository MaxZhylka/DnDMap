import {Inject, Injectable, PLATFORM_ID} from '@angular/core';

import {catchError, delay, Observable, of, tap, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {isPlatformBrowser} from "@angular/common";

interface LoginResponse {
  token: string;
}
export interface UserData {
  email: string;
  name: string;
  avatar: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   imageToLoad!: File;
  private tokenKey: string = 'auth_token';
  private apiUrl = 'http://127.0.0.1:8000/registration/api/login/';
   private dataUrl = 'http://127.0.0.1:8000/registration/api/getData/';
   private deleteUrl = 'http://127.0.0.1:8000/registration/delete_user/';
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private http: HttpClient) {}

updateImage() {
  const url = `http://127.0.0.1:8000/registration/image/`;

  const formData = new FormData();
  formData.append('appearance', this.imageToLoad);

  return this.http.put(url, formData, {
    headers: new HttpHeaders({
      'Authorization': `Token ${localStorage.getItem('auth_token')}`
    })
  });
}
  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    if (typeof localStorage === 'undefined') {
       return null;
  }

    return localStorage.getItem(this.tokenKey);
  }

    isLoggedIn(): Observable<boolean> {

      const token = localStorage.getItem('auth_token');
      return of(!!token).pipe(delay(100));
    }

  logout(): Observable<void> {
    return new Observable<void>((observer) => {
      localStorage.removeItem(this.tokenKey);
      observer.next();
      observer.complete();
    });
  }
  login(email: string, password: string): Observable<LoginResponse> {
    const headers = {
      'Content-Type': 'application/json',
      'Origin': 'http://localhost:4200'
    };
    const body = { email, password };

    return this.http.post<LoginResponse>(this.apiUrl, body, { headers }).pipe(
      tap(response => {
        this.saveToken(response.token);
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(error);
      })
    );
  }
  register(name: string, email: string, password: string) {
    return this.http.post('http://127.0.0.1:8000/registration/api/register/', { name, email, password });
  }
getUserData(): Observable<UserData> {
  const token = this.getToken();

  if (!token) {
    console.error('Token is missing!');
    return throwError(() => new Error('Token is missing!'));
  }

  const options = {
    headers: {
      'Authorization': `Token ${token}`
    }
  };

  console.log(options);

  return this.http.get<UserData>(this.dataUrl, options).pipe(
    catchError(error => {
      console.error('Error fetching user data:', error);
      return throwError(() => new Error('Error fetching user data'));
    })
  );
}
deleteCharacter(): Observable<void> {
    const token = this.getToken();

    if (!token) {
      console.error('Token is missing!');
      return throwError(() => new Error('Token is missing!'));
    }

    const options = {
      headers: new HttpHeaders({
        'Authorization': `Token ${token}`
      })
    };

    return this.http.delete<void>(this.deleteUrl, options).pipe(
      catchError(error => {
        console.error('Error deleting user:', error);
        return throwError(() => new Error('Error deleting user'));
      })
    );
  }
}
