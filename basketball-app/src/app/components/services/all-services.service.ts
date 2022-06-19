import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllPlayersResponse } from '../models/all-players.model';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor(private http: HttpClient) { }

  getAllPlayers(): Observable<IAllPlayersResponse> {
    return this.http.get<IAllPlayersResponse>('https://www.balldontlie.io/api/v1/players');
  }
}
