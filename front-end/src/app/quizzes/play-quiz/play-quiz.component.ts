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
  public indexQuestion: number;
  public score: number;

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    this.indexQuestion = 0;
    this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }


  answerSelected(isGoodAnswerChecked: boolean): void {
    this.isCorrect = isGoodAnswerChecked;
  }

  validateQuestion(): void {
    if (this.isCorrect){

    }
  }

}
