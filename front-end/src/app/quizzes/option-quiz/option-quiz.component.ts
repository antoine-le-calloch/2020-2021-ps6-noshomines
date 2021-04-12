import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-option-quiz',
  templateUrl: './option-quiz.component.html',
  styleUrls: ['./option-quiz.component.scss']
})
export class OptionQuizComponent implements OnInit {

  public user: User;

  public userForm: FormGroup;
  public restartQuestionOption: boolean;
  public answerDisplayOption: boolean;
  public displayScoreOption: boolean;

  constructor(private router: Router, public formBuilder: FormBuilder, public userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.userSelected$.subscribe((user) => {
        this.restartQuestionOption = user.restartQuestionOption;
        this.answerDisplayOption = user.answerDisplayOption;
        this.displayScoreOption = user.displayScoreOption;

        this.userForm = this.formBuilder.group({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          pathology: user.pathology,
          restartQuestionOption: user.restartQuestionOption,
          answerDisplayOption: user.answerDisplayOption,
          displayScoreOption: user.displayScoreOption,
        });
    });
    this.initOptionForm();
  }

  initOptionForm(): void {
  }


  validate(): void {
    const userToModify: User = this.userForm.getRawValue() as User;
    this.userService.modifyUser(userToModify);
    console.log(this.userForm.value);
    this.sleep(100);
    this.userService.setSelectedUser(userToModify.id);
    this.router.navigate(['/user-list']);
  }

  sleep(ms): Promise<unknown> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  onSelectRestartQuestionOption(): void {
    this.restartQuestionOption = !this.restartQuestionOption;
    console.log('restartQuestionOption : ' + this.restartQuestionOption);
  }

  onSelectAnswerDisplayOption(): void {
    this.answerDisplayOption = !this.answerDisplayOption;
    console.log('answerDisplayOption : ' + this.answerDisplayOption);
  }

  onSelectDisplayScoreOption(): void {
    this.displayScoreOption = !this.displayScoreOption;
    console.log('displayScoreOption : ' + this.displayScoreOption);
  }


}
