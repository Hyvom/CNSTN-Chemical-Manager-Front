import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/admins'; // Adjust to your backend route

  constructor(private http: HttpClient) {}

  getAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.baseUrl);
  }

  getById(id: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.baseUrl}/${id}`);
  }

  create(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.baseUrl, admin);
  }

  update(id: number, admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(`${this.baseUrl}/${id}`, admin);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  login(email: string, motDePasse: string): Observable<Admin> {
    return this.http.post<Admin>(`${this.baseUrl}/login`, { email, motDePasse });
  }
}
