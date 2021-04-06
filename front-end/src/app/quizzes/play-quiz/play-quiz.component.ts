import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Quiz} from '../../../models/quiz.model';
import {QuizService} from '../../../services/quiz.service';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss']
})
export class PlayQuizComponent implements OnInit {
  public quiz: Quiz;
  public isCorrect: boolean;
  public printDisplay: boolean;
  public restartQuestionOption: boolean;
  public indexQuestion: number;
  public displayScoreOption: boolean;
  public indexAnswer: number;
  public answerDisplayOption: boolean;
  public listIndexAnswerFalse: Array<number>;
  public score: number;

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    this.indexQuestion = 0;
    this.score = 0;
    this.displayScoreOption = true;
    this.printDisplay = false;
    this.restartQuestionOption = true;
    this.answerDisplayOption = true;
    this.listIndexAnswerFalse = [];
    this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }


  answerSelected(indexAnswer: number): void {
    this.indexAnswer = indexAnswer;
    this.isCorrect = this.getIsCorrect();
  }

  getIsCorrect(): boolean{
    console.log('isGoodAnswerChecked : ' + this.quiz.questions[this.indexQuestion].answers[this.indexAnswer].isCorrect);
    return this.quiz.questions[this.indexQuestion].answers[this.indexAnswer].isCorrect;
  }

  validateQuestion(): void {
    if (!this.restartQuestionOption) {
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
