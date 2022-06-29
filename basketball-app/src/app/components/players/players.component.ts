import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Datum, IAllPlayersResponse } from '../models/all-players.model';
import { AllServicesService } from '../services/all-services.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersComponent implements OnInit, OnDestroy {
  public allPlayers$!: Observable<IAllPlayersResponse>;
  private destroyed: Subject<any> = new Subject();
  public searchedValue!: string;

  constructor(private allPlayerService: AllServicesService, private router: Router) {}

  ngOnInit(): void {
    this.allPlayers();
  }
  
  ngOnDestroy(): void {
    this.destroyed.complete();
  }

  allPlayers() {
    this.allPlayers$ = this.allPlayerService.getAllPlayers();
  }

  goBack() {
    this.router.navigateByUrl('/dashboard');
  }

  goToDetails(player: Datum) {}
}
