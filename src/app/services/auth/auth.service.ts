import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';
import { urls } from 'src/app/lib/urls/urls';

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
}
