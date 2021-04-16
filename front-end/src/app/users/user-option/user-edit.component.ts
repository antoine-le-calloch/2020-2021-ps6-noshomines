import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-option-quiz',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  public user: User;

  public PATHOLOGY_LIST: string[] = ['aucune', 'Alzheimer stade 1', 'Alzheimer stade 2', 'Alzheimer stade 3', 'Alzheimer stade 4', 'Alzheimer stade 5 et +', 'tumeur du cerveau'];
  public LIMIT_QUESTION_PLAY_LIST: string[] = ['5', '10', '15', '20'];

  public userForm: FormGroup;
  public firstName: string;
  public lastName: string;
  public pathology: string;
  public restartQuestionOption: boolean;
  public answerDisplayOption: boolean;
  public displayScoreOption: boolean;
  public pictureQuizOption: boolean;
  public numberOfQuestionsMaxForPlayQuizOption: string;

  constructor(private router: Router, public formBuilder: FormBuilder, public userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.userSelected$.subscribe((user) => {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.pathology = user.pathology;
        this.restartQuestionOption = user.restartQuestionOption;
        this.answerDisplayOption = user.answerDisplayOption;
        this.displayScoreOption = user.displayScoreOption;
        this.pictureQuizOption = user.pictureQuizOption;
        this.numberOfQuestionsMaxForPlayQuizOption = user.numberOfQuestionsMaxForPlayQuizOption;

        this.userForm = this.formBuilder.group({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          comment: user.comment,
          pathology: user.pathology,
          restartQuestionOption: user.restartQuestionOption,
          answerDisplayOption: user.answerDisplayOption,
          displayScoreOption: user.displayScoreOption,
          pictureQuizOption: user.pictureQuizOption,
          numberOfQuestionsMaxForPlayQuizOption: user.numberOfQuestionsMaxForPlayQuizOption,
        });
    });
    this.initOptionForm();
  }

  initOptionForm(): void {
  }


  validate(): void {
    const userToModify: User = this.userForm.getRawValue() as User;
    this.setPathologyOption(userToModify);
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

  onSelectPictureQuizOption(): void {
    this.pictureQuizOption = !this.pictureQuizOption;
    console.log('pictureQuizOption : ' + this.pictureQuizOption);
  }



  setPathologyOption(userToModify: User): void {
    switch (userToModify.pathology){
      case this.PATHOLOGY_LIST[0]:
        userToModify.pictureQuizOption = false;
        userToModify.answerDisplayOption = false;
        userToModify.displayScoreOption = true;
        userToModify.restartQuestionOption = false;
        userToModify.numberOfQuestionsMaxForPlayQuizOption = '20';
        break;
      case this.PATHOLOGY_LIST[1]:
        userToModify.pictureQuizOption = false;
        userToModify.answerDisplayOption = false;
        userToModify.displayScoreOption = true;
        userToModify.restartQuestionOption = false;
        userToModify.numberOfQuestionsMaxForPlayQuizOption = '20';
        break;
      case this.PATHOLOGY_LIST[2]:
        userToModify.answerDisplayOption = true;
        userToModify.displayScoreOption = true;
        userToModify.restartQuestionOption = false;
        userToModify.pictureQuizOption = false;
        userToModify.numberOfQuestionsMaxForPlayQuizOption = '15';
        break;
      case this.PATHOLOGY_LIST[3]:
        userToModify.answerDisplayOption = true;
        userToModify.displayScoreOption = false;
        userToModify.restartQuestionOption = false;
        userToModify.pictureQuizOption = false;
        userToModify.numberOfQuestionsMaxForPlayQuizOption = '10';
        break;
      case this.PATHOLOGY_LIST[4]:
        userToModify.answerDisplayOption = true;
        userToModify.displayScoreOption = false;
        userToModify.restartQuestionOption = true;
        userToModify.pictureQuizOption = false;
        userToModify.numberOfQuestionsMaxForPlayQuizOption = '10';
        break;
      case this.PATHOLOGY_LIST[5]:
        userToModify.answerDisplayOption = true;
        userToModify.displayScoreOption = false;
        userToModify.restartQuestionOption = true;
        userToModify.pictureQuizOption = true;
        userToModify.numberOfQuestionsMaxForPlayQuizOption = '5';
        break;
      case this.PATHOLOGY_LIST[6]:
        userToModify.answerDisplayOption = false;
        userToModify.displayScoreOption = false;
        userToModify.restartQuestionOption = false;
        userToModify.pictureQuizOption = true;
        userToModify.numberOfQuestionsMaxForPlayQuizOption = '5';
        break;
      default: break;
    }
  }


}
