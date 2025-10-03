import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface FaqQuestion {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-questions',
  imports: [CommonModule, TranslateModule],
  templateUrl: './faq-questions.html',
  styleUrl: './faq-questions.css'
})
export class FaqQuestionsComponent {
  activeQuestion: number | null = null;

  getFaqQuestions(): string[] {
    return [
      'FAQ.QUESTIONS.0.QUESTION',
      'FAQ.QUESTIONS.1.QUESTION', 
      'FAQ.QUESTIONS.2.QUESTION',
      'FAQ.QUESTIONS.3.QUESTION',
      'FAQ.QUESTIONS.4.QUESTION'
    ];
  }

  getFaqAnswers(): string[] {
    return [
      'FAQ.QUESTIONS.0.ANSWER',
      'FAQ.QUESTIONS.1.ANSWER',
      'FAQ.QUESTIONS.2.ANSWER', 
      'FAQ.QUESTIONS.3.ANSWER',
      'FAQ.QUESTIONS.4.ANSWER'
    ];
  }

  toggleQuestion(index: number): void {
    this.activeQuestion = this.activeQuestion === index ? null : index;
  }
}
