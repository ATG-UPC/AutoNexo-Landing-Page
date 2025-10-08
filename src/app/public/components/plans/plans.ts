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

  getProPrice(): string {
    return this.isAnnual ? '$100 ' : '$10 ';
  }

  getPremiumPrice(): string {
    return this.isAnnual ? '$200 ' : '$20 ';
  }

  getProFeatures(): string[] {
    return [
      'Gestión de perfil y servicios',
      'Catálogo de precios',
      'Reportes de servicio',
      'Pagos integrados',
      'Hasta 50 clientes activos'
    ];
  }

  getPremiumFeatures(): string[] {
    return [
      'Gestión multisede',
      'Marketing y promociones',
      'Reportes financieros',
      'APIs e integraciones',
      'Clientes y mecánicos ilimitados',
      'Soporte técnico prioritario'
    ];
  }
}
