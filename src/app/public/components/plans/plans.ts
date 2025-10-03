import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-plans',
  imports: [CommonModule, TranslateModule],
  templateUrl: './plans.html',
  styleUrl: './plans.css'
})
export class PlansComponent {
  isAnnual = false;

  setBilling(isAnnual: boolean) {
    this.isAnnual = isAnnual;
  }

  getStarterFeatures(): string[] {
    return [
      '5 servicios por mes',
      'Plantillas básicas',
      'Soporte comunitario',
      'Componentes estándar'
    ];
  }

  getProFeatures(): string[] {
    return [
      'Servicios ilimitados',
      'Plantillas premium',
      'Soporte prioritario',
      'Animaciones avanzadas',
      'Temas personalizados',
      'Exportar a GitHub'
    ];
  }

  getTeamFeatures(): string[] {
    return [
      'Todo en Pro',
      'Colaboración en equipo',
      'Biblioteca compartida',
      'Analíticas avanzadas',
      'Integraciones personalizadas',
      'Soporte dedicado'
    ];
  }
}
