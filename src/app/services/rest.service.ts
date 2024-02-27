// vendor
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private url = environment.url;
  constructor(private httpClient: HttpClient, private router: Router) {}

  httpHeaders(): { headers: HttpHeaders } {
    let requestHeaders = new HttpHeaders();
    const accessToken = sessionStorage.getItem('access_token');

    if (accessToken?.length) {
      requestHeaders = new HttpHeaders({
        Authorization: `Bearer ${accessToken}`,
      });
    }
    return { headers: requestHeaders };
  }

  restEndpoint(endpoint: string): string {
    return `${this.url}/${endpoint}`;
  }

  get(endpoint: string): Observable<any> {
    return this.httpClient.get(this.restEndpoint(endpoint), this.httpHeaders());
  }

  post(endpoint: string, body: unknown): Observable<any> {
    return this.httpClient.post(
      this.restEndpoint(endpoint),
      body,
      this.httpHeaders()
    );
  }

  put(endpoint: string, body: unknown): Observable<any> {
    return this.httpClient.put(
      this.restEndpoint(endpoint),
      body,
      this.httpHeaders()
    );
  }

  delete(endpoint: string): Observable<any> {
    return this.httpClient.delete(
      this.restEndpoint(endpoint),
      this.httpHeaders()
    );
  }
}
