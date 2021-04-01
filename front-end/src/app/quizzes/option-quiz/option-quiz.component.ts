import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-option-quiz',
  templateUrl: './option-quiz.component.html',
  styleUrls: ['./option-quiz.component.scss']
})
export class OptionQuizComponent implements OnInit {

  public optionForm: FormGroup;
  public restartQuestion: boolean;

  constructor(public formBuilder: FormBuilder) {
    this.optionForm = this.formBuilder.group({
      restartQuestion: false,
    });
  }

  ngOnInit(): void {
  }

  onSelect(): void {
    this.restartQuestion = !this.restartQuestion;
    console.log('restartQuestion : ' + this.restartQuestion);
  }

}
