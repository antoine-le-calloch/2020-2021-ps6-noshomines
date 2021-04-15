import {Component, EventEmitter, OnInit, OnDestroy, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit, OnDestroy {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)



  /**
   * QuizForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms#step-1-creating-a-formgroup-instance
   */
  public quizForm: FormGroup;
  public isPictureAnswer: boolean;

  constructor(public formBuilder: FormBuilder, public quizService: QuizService) {
    this.isPictureAnswer = false;
    this.quizForm = this.formBuilder.group({
      name: [''],
      theme: [''],
      isPictureAnswer: false,
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  addQuiz(): void {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;
    console.log(this.quizForm.value);
    this.quizService.addQuiz(quizToCreate);
  }

  onSelect(): void {
    this.isPictureAnswer = !this.isPictureAnswer;
    console.log('isPictureAnswer : ' + this.isPictureAnswer);
  }
}
