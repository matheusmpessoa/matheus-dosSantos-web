import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient
  ) { }

  public getUserInformation(login: string): Observable<any> {
    const urlToResquest = `${environment.baseUrl}?q=${login}%20in:${login}`;
    return this.http.get(urlToResquest);
  }
}
