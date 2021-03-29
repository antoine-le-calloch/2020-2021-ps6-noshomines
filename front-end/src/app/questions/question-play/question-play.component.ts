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

  constructor(public formBuilder: FormBuilder) {
    this.initializeQuestionPlayForm(0, false);
  }

  private initializeQuestionPlayForm(index: number, isGoodAnswer: boolean): void {
    this.questionPlayForm = this.formBuilder.group({
      indexAnswer: index,
      isGoodAnswer,
    });
  }

  ngOnInit(): void {
  }

  getIndexAnswer(): number{
    return this.questionPlayForm.get('indexAnswer').value;
  }

  getIsCorrect(): boolean{
    return this.question[this.getIndexAnswer()].isCorrect;
  }

  validateQuestion(): void {
    this.initializeQuestionPlayForm(this.getIndexAnswer(), this.getIsCorrect());
  }


}
