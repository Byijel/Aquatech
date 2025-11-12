import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://htf.collide.be';

  constructor(private http: HttpClient) {}

  getDashboard(): Observable<any> {
    return this.http.get(`${this.baseUrl}/dashboard`);
  }

  getMissions(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/teams/dad1df0b-4e71-4c85-9da1-76784effeb5b/quest`
    );
  }
}