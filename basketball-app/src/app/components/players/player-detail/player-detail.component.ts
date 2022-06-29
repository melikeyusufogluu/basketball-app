import { ChangeDetectionStrategy, Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Datum } from '../../models/all-players.model';
import { AllServicesService } from '../../services/all-services.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerDetailComponent implements OnInit {
  public playersDetail$!: Observable<Datum>;
  private id!: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Datum, private allService: AllServicesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPlayerDetail();
  }

  getPlayerDetail() {
    this.playersDetail$ = this.allService.getPlayersDetail(this.data.id);
  }

}
