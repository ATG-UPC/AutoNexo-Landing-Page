import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-faq-contact',
  imports: [CommonModule, TranslateModule],
  templateUrl: './faq-contact.html',
  styleUrl: './faq-contact.css'
})
export class FaqContactComponent {

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Formulario enviado');
    // Aquí puedes agregar la lógica para enviar el formulario
  }
}
