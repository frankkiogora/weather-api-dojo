
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { WashingtonComponent } from './washington/washington.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './san-jose/san-jose.component';

const routes: Routes = [
  { path: 'seattle',component: SeattleComponent },
  { path: 'burbank',component: BurbankComponent },
  { path: 'chicago',component: ChicagoComponent },
  { path: 'dc',component: WashingtonComponent },
  { path: 'dallas',component: DallasComponent },
  { path: 'sanjose',component: SanJoseComponent },
  { path: '', pathMatch: 'full', redirectTo: '/seattle' },
  // { path: '**', component: '/PageNotFoundComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
