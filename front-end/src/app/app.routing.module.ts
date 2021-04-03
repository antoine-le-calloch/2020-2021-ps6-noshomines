import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {PlayQuizComponent} from './quizzes/play-quiz/play-quiz.component';
import {OptionQuizComponent} from './quizzes/option-quiz/option-quiz.component';
import {QuizComponent} from './quizzes/quiz/quiz.component';

const routes: Routes = [
    {path: 'user-list', component: UserListComponent},
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'play-quiz/:id', component: PlayQuizComponent},
    {path: 'edit-quiz/:id', component: EditQuizComponent},
    {path: 'quiz-list/:id', component: QuizListComponent},
    {path: 'option-quiz', component: OptionQuizComponent},
    {path: '', redirectTo: '/user-list', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
