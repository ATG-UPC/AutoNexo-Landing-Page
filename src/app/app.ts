import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './public/components/header/header';
import { HeroComponent } from './public/components/hero/hero';
import { FeaturesComponent } from './public/components/features/features';
import { PlansComponent } from './public/components/plans/plans';
import { TestimonialsComponent } from './public/components/testimonials/testimonials';
import { FaqQuestionsComponent } from './public/components/faq-questions/faq-questions';
import { FaqContactComponent } from './public/components/faq-contact/faq-contact';
import { ValuesSection } from './public/components/values-section/values-section';
import { DataSection } from './public/components/data-section/data-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, FeaturesComponent, PlansComponent, TestimonialsComponent, FaqQuestionsComponent, FaqContactComponent, ValuesSection, DataSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Autonexo-landingPage');
}
