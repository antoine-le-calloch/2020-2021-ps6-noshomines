import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import {PlayQuizComponent} from './quizzes/play-quiz/play-quiz.component';
import { AppRoutingModule } from './app.routing.module';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';
import {QuestionPlayComponent} from './questions/question-play/question-play.component';
import { QuestionComponent } from './questions/question/question.component';
import { UserComponent } from './users/user/user.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {AnswerDisplayComponent} from './display/answer/answer-display.component';
import {ResumeDisplayComponent} from './display/resume/resume-display.component';
import {OptionQuizComponent} from './quizzes/option-quiz/option-quiz.component';
import {GestionQuizComponent} from './quizzes/gestion-quiz/gestion-quiz.component';
import {MainpageHeaderComponent} from './header/mainpage-header/mainpage-header.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    HeaderComponent,
    QuizFormComponent,
    EditQuizComponent,
    PlayQuizComponent,
    OptionQuizComponent,
    QuestionListComponent,
    QuestionFormComponent,
    QuestionPlayComponent,
    QuestionComponent,
    AnswerDisplayComponent,
    ResumeDisplayComponent,
    UserComponent,
    UserFormComponent,
    UserListComponent,
    GestionQuizComponent,
    MainpageHeaderComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
