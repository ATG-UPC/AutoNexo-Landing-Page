import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {

  goToSignup() {
    // Aquí puedes agregar la URL de registro cuando la tengas
    console.log('Navegando al registro...');
  }

  goToLogin() {
    // Aquí puedes agregar la URL de login cuando la tengas
    console.log('Navegando al login...');
  }

}
