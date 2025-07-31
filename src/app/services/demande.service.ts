import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Demande } from '../models/demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private baseUrl = 'http://localhost:8080/demandes'; // Adjust to your backend base URL

  constructor(private http: HttpClient) {}

  getAll(): Observable<Demande[]> {
    return this.http.get<Demande[]>(this.baseUrl);
  }

  getById(id: number): Observable<Demande> {
    return this.http.get<Demande>(`${this.baseUrl}/${id}`);
  }

  create(demande: Demande): Observable<Demande> {
    return this.http.post<Demande>(this.baseUrl, demande);
  }

  update(id: number, demande: Demande): Observable<Demande> {
    return this.http.put<Demande>(`${this.baseUrl}/${id}`, demande);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getDemandesByUser(userId: number): Observable<Demande[]> {
    return this.http.get<Demande[]>(`${this.baseUrl}/user/${userId}`);
  }
}
