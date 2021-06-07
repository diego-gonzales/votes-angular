import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VotesService } from '../../services/votes.service';
import { Vote } from '../../interfaces/votes.interface';

@Component({
  selector: 'app-votes-form',
  templateUrl: './votes-form.component.html',
  styleUrls: ['./votes-form.component.css']
})
export class VotesFormComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    title: [ '', Validators.required ],
    link: [ '', Validators.required ]
  });


  constructor( private fb: FormBuilder,
               private votesService: VotesService ) { }

  ngOnInit(): void { }


  submit() {
    if (this.myForm.invalid) {
      return;
    };

    const { title, link } = this.myForm.value;
    const vote: Vote = {
      title,
      link,
      points: 0
    };

    this.votesService.createVote(vote);

    this.myForm.reset();

  };

}
