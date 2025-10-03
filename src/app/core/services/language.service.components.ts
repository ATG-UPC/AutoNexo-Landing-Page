import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('es');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();
  private translationsLoadedSubject = new BehaviorSubject<boolean>(false);
  public translationsLoaded$ = this.translationsLoadedSubject.asObservable();

  constructor(private translate: TranslateService) {
    // Inicializar con el idioma actual del TranslateService
    this.currentLanguageSubject.next(this.translate.currentLang || 'es');

    // Escuchar cambios de idioma
    this.translate.onLangChange.subscribe(event => {
      this.currentLanguageSubject.next(event.lang);
      this.translationsLoadedSubject.next(true);
    });

    this.initializeTranslations();
  }

  private initializeTranslations() {
    // Verificar si las traducciones ya están cargadas
    if (this.translate.currentLang) {
      this.translationsLoadedSubject.next(true);
    } else {
      // Si no hay idioma actual, usar español por defecto
      this.translate.use('es').subscribe({
        next: () => {
          this.translationsLoadedSubject.next(true);
        },
        error: (error) => {
          console.error('Error loading translations:', error);
          this.translationsLoadedSubject.next(false);
        }
      });
    }
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  getCurrentLanguageDisplay(): string {
    return this.currentLanguageSubject.value === 'es' ? 'ES' : 'EN';
  }

  switchLanguage(): void {
    const newLang = this.currentLanguageSubject.value === 'es' ? 'en' : 'es';
    this.translate.use(newLang).subscribe({
      next: () => {
        this.currentLanguageSubject.next(newLang);
        this.translationsLoadedSubject.next(true);
      },
      error: (error) => {
        console.error('Error switching language:', error);
        this.translationsLoadedSubject.next(false);
      }
    });
  }

  setLanguage(lang: string): void {
    this.translate.use(lang).subscribe({
      next: () => {
        this.currentLanguageSubject.next(lang);
        this.translationsLoadedSubject.next(true);
      },
      error: (error) => {
        console.error('Error setting language:', error);
        this.translationsLoadedSubject.next(false);
      }
    });
  }

  waitForTranslations(): Observable<boolean> {
    return this.translationsLoaded$;
  }
}
