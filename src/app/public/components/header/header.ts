import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../../../../landing/AutoNexo-Landing-Page-main/src/app/core/services/language.service.components';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentLanguage = 'ES';
  isMobileMenuOpen = false;
  private languageSubscription?: Subscription;

  constructor(
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.currentLanguage = this.languageService.getCurrentLanguageDisplay();

    this.languageSubscription = this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang === 'es' ? 'ES' : 'EN';
    });
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  toggleLanguage() {
    this.languageService.switchLanguage();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  goToLogin() {
    // Aquí puedes agregar la URL de login cuando la tengas
    console.log('Navegando al login...');
  }

  goToSignup() {
    // Aquí puedes agregar la URL de registro cuando la tengas
    console.log('Navegando al registro...');
  }
}
