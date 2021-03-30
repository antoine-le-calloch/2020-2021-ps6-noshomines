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
  public indexQuestion: number;
  public indexAnswer: number;
  public score: number;

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    this.indexQuestion = 0;
    this.printDisplay = false;
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
    if (this.printDisplay){
      this.indexQuestion++;
      this.printDisplay = false;
    }
    else {
      this.printDisplay = true;
    }
    console.log('index de la question : ' + this.indexQuestion);
  }

  restartQuiz(): void {
    this.indexQuestion = 0;
  }

}
