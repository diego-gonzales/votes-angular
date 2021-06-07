import { Component, OnInit } from '@angular/core';
import { VotesService } from '../../services/votes.service';
import { Vote } from '../../interfaces/votes.interface';

@Component({
  selector: 'app-votes-list',
  templateUrl: './votes-list.component.html',
  styleUrls: ['./votes-list.component.css']
})
export class VotesListComponent implements OnInit {

  votes: Vote[] = [];


  constructor( private votesService: VotesService) { }

  ngOnInit(): void {
    this.votes = this.votesService.getVotes();
  };


}
