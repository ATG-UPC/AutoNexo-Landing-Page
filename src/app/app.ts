import { Component, signal, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './public/components/header/header';
import { HeroComponent } from './public/components/hero/hero';
import { FeaturesComponent } from './public/components/features/features';
import { PlansComponent } from './public/components/plans/plans';
import { TestimonialsComponent } from './public/components/testimonials/testimonials';
import { FaqQuestionsComponent } from './public/components/faq-questions/faq-questions';
import { FaqContactComponent } from './public/components/faq-contact/faq-contact';
import { ValuesSection } from './public/components/values-section/values-section';
import { DataSection } from './public/components/data-section/data-section';
import {FooterComponent} from './public/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [TranslateModule, HeaderComponent, HeroComponent, FeaturesComponent, PlansComponent, TestimonialsComponent, FaqQuestionsComponent, FaqContactComponent, ValuesSection, DataSection, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Autonexo-landingPage');

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    // Configurar idiomas disponibles
    this.translate.addLangs(['es', 'en']);

    // Establecer idioma por defecto
    this.translate.setDefaultLang('es');

    // Intentar obtener idioma del navegador o usar español por defecto
    const browserLang = this.translate.getBrowserLang();
    const langToUse = browserLang?.match(/es|en/) ? browserLang : 'es';

    this.translate.use(langToUse);
  }
}
