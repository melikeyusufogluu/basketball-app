import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dashbord',
  templateUrl: './main-dashbord.component.html',
  styleUrls: ['./main-dashbord.component.scss']
})
export class MainDashbordComponent implements OnInit {
  dashboardList = [
    {title: 'All Players', subtitle: 'See all players', desc: `You can see NBA's players`},
    {title: 'All Teams', subtitle: 'See all teams', desc: `You can see NBA's teams`},
    {title: 'All Games', subtitle: 'See all games', desc: `You can see NBA's games`},
    {title: 'All Stats', subtitle: 'See all stats', desc: `You can see NBA's stats`},
    {title: 'Season Averages', subtitle: 'See season averages', desc: 'You can see NBA season average'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
