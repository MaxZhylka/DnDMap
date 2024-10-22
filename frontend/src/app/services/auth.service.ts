import {Inject, Injectable, PLATFORM_ID} from '@angular/core';

import {catchError, delay, Observable, of, tap, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {isPlatformBrowser} from "@angular/common";
import {AbstractControl, ɵFormGroupRawValue, ɵGetProperty, ɵTypedOrUntyped} from "@angular/forms";

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
      private avatarUrl = 'http://127.0.0.1:8000/registration/api/getAvatar/';
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private http: HttpClient) {}

updateImage() {
  const url = `http://127.0.0.1:8000/registration/update_avatar/`;

  const formData = new FormData();
  formData.append('avatar', this.imageToLoad);

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



  return this.http.get<UserData>(this.dataUrl, options).pipe(
    catchError(error => {
      console.error('Error fetching user data:', error);
      return throwError(() => new Error('Error fetching user data'));
    })
  );
}

getUserAvatar(): Observable<UserData> {
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



  return this.http.get<UserData>(this.avatarUrl, options).pipe(
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


  updateName(name: string | null): Observable<any> {
      const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    return this.http.put(`http://127.0.0.1:8000/registration/update-name/`, { name }, { headers });
  }

  updateEmail(email: string): Observable<any> {
      const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    return this.http.put(`http://127.0.0.1:8000/registration/update-email/`, { email }, { headers });
  }

  updatePassword(oldPassword: string, newPassword: string): Observable<any> {
      const token = this.getToken();
      console.log(token);
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    return this.http.put(`http://127.0.0.1:8000/registration/update-password/`, { old_password: oldPassword, new_password: newPassword }, { headers });
  }
}
