import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashbordComponent } from './components/main-dashbord/main-dashbord.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  { path: 'dashboard', component: MainDashbordComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'players', component: PlayersComponent },
  { path: 'teams', component: TeamsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
