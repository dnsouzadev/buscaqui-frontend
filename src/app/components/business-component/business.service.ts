import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Business } from './business.model';


@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  private apiUrl = 'http://localhost:8080/businesses';

  constructor(private http: HttpClient) {}

  getBusinesses(): Observable<Business[]> {
    return this.http.get<{ content: Business[] }>(this.apiUrl).pipe(
      map((response: { content: any; }) => response.content)
    );
  }

  getBusinessById(id: number): Observable<Business> {
    return this.http.get<Business>(`${this.apiUrl}/${id}`);
  }

  createBusiness(business: Business): Observable<Business> {
    return this.http.post<Business>(this.apiUrl, business);
  }

  updateBusiness(business: Business): Observable<Business> {
    return this.http.put<Business>(`${this.apiUrl}/${business.id}`, business);
  }

  deleteBusiness(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
