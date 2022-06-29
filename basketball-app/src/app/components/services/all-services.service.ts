import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datum, IGeneralResponse } from '../models/all-players.model';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor(private http: HttpClient) { }

  getAllPlayers(): Observable<IGeneralResponse> {
    return this.http.get<IGeneralResponse>('https://www.balldontlie.io/api/v1/players');
  }

  getPlayersDetail(id: number): Observable<Datum> {
    return this.http.get<Datum>(`https://www.balldontlie.io/api/v1/players/${id}`);
  }

  getAllTeams(): Observable<IGeneralResponse> {
    return this.http.get<IGeneralResponse>("https://www.balldontlie.io/api/v1/teams");
  }
}
