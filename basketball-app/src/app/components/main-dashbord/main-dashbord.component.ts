import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dashbord',
  templateUrl: './main-dashbord.component.html',
  styleUrls: ['./main-dashbord.component.scss']
})
export class MainDashbordComponent implements OnInit {
  dashboardList = [
    {title: 'All Players', subtitle: 'See all players', desc: `You can see NBA's players`, router:'players'},
    {title: 'All Teams', subtitle: 'See all teams', desc: `You can see NBA's teams`, router:'teams'},
    {title: 'All Games', subtitle: 'See all games', desc: `You can see NBA's games`, router:'games'},
    {title: 'All Stats', subtitle: 'See all stats', desc: `You can see NBA's stats`, router:'stats'},
    {title: 'Season Averages', subtitle: 'See season averages', desc: 'You can see NBA season average', router:'averages'},
  ];

  title = 'Welcome to NBA Dashboard';

  constructor(private router: Router) { }

  ngOnInit(): void { }

  goDetails(router: string) {
    this.router.navigateByUrl(router);
  }
}
