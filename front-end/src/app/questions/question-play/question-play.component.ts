import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Answer, Question} from '../../../models/question.model';
import {Quiz} from "../../../models/quiz.model";

@Component({
  selector: 'app-question-play',
  templateUrl: './question-play.component.html',
  styleUrls: ['./question-play.component.scss']
})

export class QuestionPlayComponent implements OnInit {

  selectedAnswer?: Answer;

  @Input()
  question: Question;

  @Output()
  isGoodAnswerChecked: EventEmitter<boolean> = new EventEmitter<boolean>();

  public questionPlayForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.questionPlayForm = this.formBuilder.group({
      indexAnswer: 0,
    });
  }

  ngOnInit(): void {
  }

  getIsCorrect(index: number): boolean{
    console.log('isGoodAnswerChecked : ' + this.question.answers[index].isCorrect);
    return this.question.answers[index].isCorrect;
  }

  onSelect(answer: Answer, index: number): void {
    this.selectedAnswer = answer;
    this.isGoodAnswerChecked.emit(this.getIsCorrect(index));

  }


}
