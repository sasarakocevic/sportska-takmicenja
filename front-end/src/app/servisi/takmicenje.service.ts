import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Takmicenje } from '../modeli/takmicenje.model';
import { TimService } from './tim.service';

@Injectable({
  providedIn: 'root'
})
export class TakmicenjeService {

  public baseURL = "http://127.0.0.1:8000/api/takmicenje";


  // public takmicenja: Takmicenje[] = [
  //   { id: 1, naziv: 'Liga Sampiona', datum_od: '2022-06-15', datum_do: '2022-06-15', mjesto_odrzavanja: 'Podgorica', timovi: this.timServis.getTimovi() }
  // ];

  constructor(private http: HttpClient, private timServis: TimService) { }

  // getTakmicenje(id: number): Takmicenje {
  //   let takmicenjeRes!: Takmicenje;
  //   this.takmicenja.forEach(takmicenje => {
  //     if (takmicenje.id == id) takmicenjeRes = takmicenje;
  //   });
  //   return takmicenjeRes;
  // }

  getAll(): Observable<Takmicenje[]> {
    return this.http.get<Takmicenje[]>(`${this.baseURL}`)
  }

  get(id: string): Observable<Takmicenje> {
    return this.http.get<Takmicenje>(`${this.baseURL}/${id}`);
  }

  save(data: Takmicenje): Observable<Takmicenje> {
    return this.http.post<Takmicenje>(`${this.baseURL}`, data);

  }
  getTakmicenjeWithTimovi(id: number): Observable<Takmicenje> {
    return this.http.get<Takmicenje>(`${this.baseURL}/${id}/timovi`);
  }

  insertTimIntoTakmicenje(takmicenjeId: number, timId: number) {

    this.http.post((`${this.baseURL}/${takmicenjeId}/timovi/${timId}`), null).subscribe(
      response => {

      }
    );

  }
}
