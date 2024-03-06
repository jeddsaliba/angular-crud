// vendor
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
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

  restEndpointParams(params: any) {
    return new URLSearchParams(params).toString();
  }

  restEndpoint(endpoint: string): string {
    return `${this.url}/${endpoint}`;
  }

  get(endpoint: string): Observable<any> {
    return this.httpClient.get(this.restEndpoint(endpoint), this.httpHeaders())
    .pipe(catchError(this.errorHandler));
  }

  post(endpoint: string, body: unknown): Observable<any> {
    return this.httpClient.post(
      this.restEndpoint(endpoint),
      body,
      this.httpHeaders()
    ).pipe(catchError(this.errorHandler));
  }

  put(endpoint: string, body: unknown): Observable<any> {
    return this.httpClient.put(
      this.restEndpoint(endpoint),
      body,
      this.httpHeaders()
    ).pipe(catchError(this.errorHandler));
  }

  delete(endpoint: string): Observable<any> {
    return this.httpClient.delete(
      this.restEndpoint(endpoint),
      this.httpHeaders()
    ).pipe(catchError(this.errorHandler));
  }

  private errorHandler = (response: Response) => {
    switch (response.status) {
      case 401:
        sessionStorage.clear();
        this.router.navigate(['/login']);
        break;
      default:
        break;
    }
    return throwError(response);
  }
}
