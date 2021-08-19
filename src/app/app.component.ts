import { Component } from '@angular/core';
import { IQuestion } from './core/model/question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Summer Quiz';
  question: IQuestion = {
      qId: "1", 
      value: "Comment je m'appelle ?", 
      suggestions: ['Anthony', 'Florian', 'Maxime', 'Antoine']
  }
}
