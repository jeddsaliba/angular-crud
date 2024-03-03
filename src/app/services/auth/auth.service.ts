import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';
import { urls } from 'src/app/lib/urls/urls';
import HashID from 'hashids';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private rest: RestService) { }

  login(payload: {email: string, password: string}): Observable<any> {
    return this.rest.post(`${urls.auth}/${urls.login}`, payload);
  }
  logout(): Observable<any> {
    return this.rest.post(`${urls.auth}/${urls.logout}`, null);
  }
  encrypt(value: string) {
    try {
      const hashKey = new HashID(environment.hashKeys.salt, environment.hashKeys.keyLength, environment.hashKeys.secretKey);
      return hashKey.encode(value);
    } catch (error) {
      return value;
    }
  }
}
