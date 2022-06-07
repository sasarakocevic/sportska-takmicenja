import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tim } from '../modeli/tim.model';

@Injectable({
  providedIn: 'root'
})
export class TimService {
  private baseURL = "http://127.0.0.1:8000/api/tim";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tim[]> {
    return this.http.get<Tim[]>(`${this.baseURL}`)
  }


  save(data: Tim): Observable<Tim> {
    return this.http.post<Tim>(`${this.baseURL}`, data);

  }

  get(id: string): Observable<Tim> {
    return this.http.get<Tim>(`${this.baseURL}/${id}`);
  }

}
