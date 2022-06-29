import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Datum, IGeneralResponse } from '../models/all-players.model';
import { AllServicesService } from '../services/all-services.service';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersComponent implements OnInit, OnDestroy {
  public allPlayers$!: Observable<IGeneralResponse>;
  private destroyed: Subject<any> = new Subject();
  public searchedValue!: string;

  constructor(private allPlayerService: AllServicesService, private router: Router, public dialog: MatDialog) {}

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

  goToDetails(player: Datum) {
      this.dialog.open(PlayerDetailComponent, {
        data: {
          id: player.id,
        },
      });
    }
}
