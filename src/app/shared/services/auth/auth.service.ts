import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestService } from '../rest/rest.service';
import HashID from 'hashids';
import { Urls } from '@enum/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  hashKey = new HashID(environment.hashKeys.salt, environment.hashKeys.minLength, environment.hashKeys.alphabet);
  constructor(private rest: RestService) { }
  getAccessToken(): Observable<any> {
    return of(sessionStorage.getItem('access_token'));
  }
  login(payload: {email: string, password: string}): Observable<any> {
    return this.rest.post(`${Urls.auth}/${Urls.login}`, payload);
  }
  logout(): Observable<any> {
    return this.rest.post(`${Urls.auth}/${Urls.logout}`, null);
  }
  loggedInUser(): Observable<any> {
    return this.rest.get(`${Urls.auth}/${Urls.user}`);
  }
  encrypt(value: string) {
    try {
      return this.hashKey.encode(value);
    } catch (error) {
      return value;
    }
  }
  decrypt(value: string) {
    try {
      return this.hashKey.decode(value);
    } catch (error) {
      return value;
    }
  }
}
