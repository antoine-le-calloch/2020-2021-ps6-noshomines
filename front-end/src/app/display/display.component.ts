import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {QuestionPlayComponent} from '../questions/question-play/question-play.component';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})

export class DisplayComponent implements OnInit {

  @Input()
  isCorrect: boolean;

  constructor() {}

  ngOnInit(): void  {
  }


}



