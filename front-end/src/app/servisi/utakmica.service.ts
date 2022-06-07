import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utakmica } from '../modeli/utakmica.model';

@Injectable({
  providedIn: 'root'
})
export class UtakmicaService {

  public baseURL = "http://127.0.0.1:8000/api/utakmica";

  constructor(private http: HttpClient) { }


  getAll(): Observable<Utakmica[]> {
    return this.http.get<Utakmica[]>(`${this.baseURL}`)
  }


  save(data: any) {
    this.http.post(`${this.baseURL}`, data).subscribe(
      respone => {

      }
    );

  }
}
