import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'votes',
    loadChildren: () => import('./votes/votes.module').then( m => m.VotesModule )
  },
  {
    path: '**',
    redirectTo: 'votes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
