import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {QuestionPlayComponent} from '../questions/question-play/question-play.component';
import {Quiz} from '../../models/quiz.model';
import {Question} from '../../models/question.model';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})

export class DisplayComponent implements OnInit {


  @Input()
  isCorrect: boolean;

  @Input()
  question: Question;


  constructor() {
  }

  ngOnInit(): void  {
  }

  findAnswer(): string {
    for (let i = 0; i < this.question.answers.length; i++) {
      if (this.question.answers[i].isCorrect){
        return this.question.answers[i].value;
      }
    }
    return 'Aucune réponse';
  }


}



