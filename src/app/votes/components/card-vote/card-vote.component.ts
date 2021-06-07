import { Component, Input, OnInit } from '@angular/core';
import { Vote } from '../../interfaces/votes.interface';
import { VotesService } from '../../services/votes.service';

@Component({
  selector: 'app-card-vote',
  templateUrl: './card-vote.component.html',
  styleUrls: ['./card-vote.component.css']
})
export class CardVoteComponent implements OnInit {

  @Input('voteChild') vote!: Vote;

  constructor( private votesService: VotesService ) { }

  ngOnInit(): void {
  }


  up() {
    this.vote.points!++;
    this.votesService.saveVotesLocalStorage();
  };

  down() {
    if (this.vote.points === 0) return;

    this.vote.points!--;
    this.votesService.saveVotesLocalStorage();
  };

}
