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

  public questionPlay: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.questionPlay = this.formBuilder.group({
      indexAnswer: 0,
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  validateQuestion() {

    // value -> antoine, if (answer.value = antoine).isCorrect == true)
  }


}
