import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Quiz} from '../../../models/quiz.model';
import {QuizService} from '../../../services/quiz.service';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';
import {max} from 'rxjs/operators';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss']
})
export class PlayQuizComponent implements OnInit {
  public quiz: Quiz;
  public user: User;

  public isCorrect: boolean;
  public printDisplay: boolean;
  public indexQuestion: number;
  public indexAnswer: number;
  public listIndexAnswerFalse: Array<number>;
  public score: number;
  public numberOfQuestions: number;

  constructor(private route: ActivatedRoute, private quizService: QuizService, public userService: UserService) {
    this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);
    this.userService.userSelected$.subscribe((user) => {
      this.user = user;
      this.numberOfQuestions = parseInt(user.numberOfQuestionsMaxForPlayQuizOption, 10);
    });
    this.indexQuestion = 0;
    this.score = 0;
    this.printDisplay = false;
    this.listIndexAnswerFalse = [];
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }


  answerSelected(indexAnswer: number): void {
    console.log('playquiz : restartQuestionOption : ' + this.user.restartQuestionOption);
    console.log('playquiz : answerDisplayOption : ' + this.user.answerDisplayOption);
    console.log('playquiz : displayScoreOption : ' + this.user.displayScoreOption);
    this.indexAnswer = indexAnswer;
    this.isCorrect = this.getIsCorrect();
  }

  getIsCorrect(): boolean{
    console.log('isGoodAnswerChecked : ' + this.quiz.questions[this.indexQuestion].answers[this.indexAnswer].isCorrect);
    return this.quiz.questions[this.indexQuestion].answers[this.indexAnswer].isCorrect;
  }

  validateQuestion(): void {
    if (!this.user.restartQuestionOption) {
      this.printDisplay = true;
      if (this.getIsCorrect()) {
        this.score++;
      }
    }
    else {
      if (this.getIsCorrect()) {
        this.printDisplay = true;
        this.score++;
      }
      else {
        this.listIndexAnswerFalse.push(this.indexAnswer);
      }
    }

    console.log('score : ' + this.score);
    console.log('index de la question : ' + this.indexQuestion);
  }

  nextQuestion(): void {
    this.indexQuestion++;
    this.printDisplay = false;
    this.indexAnswer = null;
    this.listIndexAnswerFalse = [];
  }

  restartQuiz(): void {
    this.score = 0;
    this.indexQuestion = 0;
    this.listIndexAnswerFalse = [];
  }

}
