import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';


@Component({
  selector: 'app-option-quiz',
  templateUrl: './option-quiz.component.html',
  styleUrls: ['./option-quiz.component.scss']
})
export class OptionQuizComponent implements OnInit {

  public user: User;

  public optionForm: FormGroup;
  public restartQuestion: boolean;
  public answerDisplayOption: boolean;
  public displayScoreOption: boolean;

  constructor(public formBuilder: FormBuilder, private userService: UserService) {
    this.userService.userSelected$.subscribe((user) => {
      this.optionForm = this.formBuilder.group({
        restartQuestion: user.restartQuestionOption,
        answerDisplayOption: user.answerDisplayOption,
        displayScoreOption: user.displayScoreOption,
      });
    });

  }

  ngOnInit(): void {
  }

  validate(): void {
  }

}
