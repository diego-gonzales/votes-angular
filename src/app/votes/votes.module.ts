import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VotesRoutingModule } from './votes-routing.module';
import { VotesComponent } from './votes.component';
import { VotesFormComponent } from './pages/votes-form/votes-form.component';
import { VotesListComponent } from './pages/votes-list/votes-list.component';
import { CardVoteComponent } from './components/card-vote/card-vote.component';


@NgModule({
  declarations: [
    VotesComponent,
    VotesFormComponent,
    VotesListComponent,
    CardVoteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VotesRoutingModule
  ]
})
export class VotesModule { }
