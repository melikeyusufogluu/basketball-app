import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashbordComponent } from './components/main-dashbord/main-dashbord.component';

const routes: Routes = [
  {path: 'dashboard', component: MainDashbordComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
