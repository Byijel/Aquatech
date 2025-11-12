import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  postSolution(missionId: string, solution: string): Observable<any> {
    const params = new HttpParams().set('result', solution);
    return this.http.post(`${this.baseUrl}/missions/${missionId}/solution`, null, { params: params });
  }

  getGeneratedSolution(missionId: string, parameters: string): Observable<string> {
    const params = new HttpParams()
      .set('missionId', missionId)
      .set('parameters', parameters);
    // Call the local backend for solution generation
    return this.http.get('http://localhost:8080/api/solution', { params: params, responseType: 'text' });
  }
}