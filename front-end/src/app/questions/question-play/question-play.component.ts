import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuizService} from '../../../services/quiz.service';
import {Question} from '../../../models/question.model';

@Component({
  selector: 'app-question-play',
  templateUrl: './question-play.component.html',
  styleUrls: ['./question-play.component.scss']
})

export class QuestionPlayComponent implements OnInit {


  @Input()
  question: Question;

  public questionPlayForm: FormGroup;
  public isGoodAnswerChecked: boolean;

  constructor(public formBuilder: FormBuilder) {
    this.isGoodAnswerChecked = null;
    this.questionPlayForm = this.formBuilder.group({
      indexAnswer: 0,
    });
  }

  ngOnInit(): void {
  }

  getIndexAnswer(): number{
    return this.questionPlayForm.get('indexAnswer').value;
  }

  getIsCorrect(): boolean{
    console.log('isGoodAnswerChecked : ' + this.question.answers[this.getIndexAnswer()].isCorrect);
    return this.question.answers[this.getIndexAnswer()].isCorrect;
  }

  validateQuestion(): void {
    this.isGoodAnswerChecked = this.getIsCorrect();
  }


}
