import { Injectable } from '@angular/core';
import { Vote } from '../interfaces/votes.interface';

@Injectable({
  providedIn: 'root'
})
export class VotesService {

  private votes: Vote[] = [
    {
      title: 'Angular',
      link: 'https://angular.io/',
      points: 100
    },
    {
      title: 'NestJS',
      link: 'https://nestjs.com/',
      points: 100
    }
  ];


  constructor() {
    if (localStorage.getItem('votes')) {
      this.votes = JSON.parse(localStorage.getItem('votes')!);
    };
  };


  getVotes() {
    return this.votes;
  };

  createVote( vote: Vote ) {
    this.votes.unshift(vote);
    this.saveVotesLocalStorage();
  };

  saveVotesLocalStorage() {
    localStorage.setItem( 'votes', JSON.stringify(this.votes) );
  };

}
