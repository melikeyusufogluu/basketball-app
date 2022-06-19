import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllPlayersResponse } from '../models/all-players.model';
import { AllServicesService } from '../services/all-services.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  public allPlayers$!: Observable<IAllPlayersResponse>;

  constructor(private allPlayerService: AllServicesService) {}

  ngOnInit(): void {
    this.allPlayers();
  }

  allPlayers() {
    this.allPlayerService.getAllPlayers().subscribe();
  }
}
