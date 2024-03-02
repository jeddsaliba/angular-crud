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
    return this.rest.post(urls.login, payload);
  }
  logout(): Observable<any> {
    return this.rest.post(urls.logout, null);
  }
  encrypt(value: string) {
    const hashKey = new HashID(environment.hashKeys.salt, environment.hashKeys.keyLength, environment.hashKeys.secretKey);
    try {
      return hashKey.encode(value);
    } catch (error) {
      console.log("err", error);
      return value;
    }
  }
}
