import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public userForm: FormGroup;

  public PATHOLOGY_LIST: string[] = ['aucune', 'Alzheimer stade 1', 'Alzheimer stade 2', 'Alzheimer stade 3', 'Alzheimer stade 4', 'Alzheimer stade 5 et +', 'tumeur du cerveau'];

  constructor(public formBuilder: FormBuilder, public userService: UserService) {
    this.userForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      comment: [''],
      pathology: [''],
      restartQuestionOption: false,
      displayScoreOption: true,
      answerDisplayOption: false,
      pictureQuizOption: false,
      numberOfQuestionsMaxForPlayQuizOption: '0',
    });
  }

  ngOnInit(): void {
  }

  addUser(): void {
    // We retrieve here the user object from the userForm and we cast the type "as User".
    const userToCreate: User = this.userForm.getRawValue() as User;
    this.setPathologyOption(userToCreate);
    console.log(this.userForm.value);
    console.log(userToCreate.pictureQuizOption);
    this.userService.addUser(userToCreate);
  }

  setPathologyOption(userCreate: User): void {
    switch (userCreate.pathology){
      case this.PATHOLOGY_LIST[0]: userCreate.numberOfQuestionsMaxForPlayQuizOption = '20';
                                   break;
      case this.PATHOLOGY_LIST[1]: userCreate.numberOfQuestionsMaxForPlayQuizOption = '20';
                                   break;
      case this.PATHOLOGY_LIST[2]: userCreate.answerDisplayOption = true;
                                   userCreate.numberOfQuestionsMaxForPlayQuizOption = '15';
                                   break;
      case this.PATHOLOGY_LIST[3]: userCreate.answerDisplayOption = true;
                                   userCreate.displayScoreOption = false;
                                   userCreate.numberOfQuestionsMaxForPlayQuizOption = '10';
                                   break;
      case this.PATHOLOGY_LIST[4]: userCreate.answerDisplayOption = true;
                                   userCreate.displayScoreOption = false;
                                   userCreate.restartQuestionOption = true;
                                   userCreate.numberOfQuestionsMaxForPlayQuizOption = '10';
                                   break;
      case this.PATHOLOGY_LIST[5]: userCreate.answerDisplayOption = true;
                                   userCreate.displayScoreOption = false;
                                   userCreate.restartQuestionOption = true;
                                   userCreate.pictureQuizOption = true;
                                   userCreate.numberOfQuestionsMaxForPlayQuizOption = '5';
                                   break;
      case this.PATHOLOGY_LIST[6]: userCreate.displayScoreOption = false;
                                   userCreate.pictureQuizOption = true;
                                   userCreate.numberOfQuestionsMaxForPlayQuizOption = '5';
                                   break;
      default: break;
    }
  }
}
