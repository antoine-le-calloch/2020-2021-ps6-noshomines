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
      /*birthday: [''],*/
      comment: [''],
      pathology: [''],
      restartQuestionOption: false,
      displayScoreOption: true,
      answerDisplayOption: false,
      pictureAnswerOption: false,
    });
  }

  ngOnInit(): void {
  }

  addUser(): void {
    // We retrieve here the user object from the userForm and we cast the type "as User".
    const userToCreate: User = this.userForm.getRawValue() as User;
    this.setPathologyOption(userToCreate);
    console.log(userToCreate.pictureAnswerOption);
    this.userService.addUser(userToCreate);
  }

  setPathologyOption(userCreate: User): void {
    switch (userCreate.pathology){
      case this.PATHOLOGY_LIST[2]: userCreate.answerDisplayOption = true;
                                   break;
      case this.PATHOLOGY_LIST[3]: userCreate.answerDisplayOption = true;
                                   userCreate.displayScoreOption = false;
                                   break;
      case this.PATHOLOGY_LIST[4]: userCreate.answerDisplayOption = true;
                                   userCreate.displayScoreOption = false;
                                   userCreate.restartQuestionOption = true;
                                   break;
      case this.PATHOLOGY_LIST[5]: userCreate.answerDisplayOption = true;
                                   userCreate.displayScoreOption = false;
                                   userCreate.restartQuestionOption = true;
                                   userCreate.pictureAnswerOption = true;
                                   break;
      case this.PATHOLOGY_LIST[6]: userCreate.displayScoreOption = false;
                                   userCreate.pictureAnswerOption = true;
                                   break;
      default: break;
    }
  }
}
