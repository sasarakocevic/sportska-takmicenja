import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BodoviService {

  private baseURL = "http://127.0.0.1:8000/api/bodovi";

  constructor(private http: HttpClient) { }

  save(timId: any, bodovi: number, takmicenjeId: any) {
    this.http.post(`${this.baseURL}`, { tim_id: timId, broj_bodova: bodovi, takmicenje_id: takmicenjeId }).subscribe(
      respone => {

      }
    );
  }

  getBodovi(timId: any, takmicenjeId: any) {
    return this.http.get(`${this.baseURL}/${timId}/${takmicenjeId}`);
  }
}
