import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Testimonial {
  text: string;
  name: string;
  handle: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, TranslateModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class TestimonialsComponent {
  private testimonials: Testimonial[] = [
    {
      text: "En 2 días usando Autonexo. Ahorré mucho tiempo de desarrollo.",
      name: "Devon Carter",
      handle: "@devninja"
    },
    {
      text: "Autonexo ha cambiado completamente la forma en que construyo servicios. Reserva, conecta, listo. Sin más estrés de búsqueda.",
      name: "Arjun Mehta",
      handle: "@arjdev"
    },
    {
      text: "Honestamente sorprendido de lo suave que son los servicios de Autonexo. Funciona perfectamente.",
      name: "Sara Lin",
      handle: "@sara.codes"
    },
    {
      text: "Autonexo nos ayudó a conectar con múltiples mecánicos sin escribir una línea de código. Pura magia.",
      name: "Chloe Winters",
      handle: "@chloewinters"
    },
    {
      text: "Reservé algunos servicios en Autonexo y todo se integró perfectamente con mi flujo de trabajo. Gran victoria.",
      name: "Priya Shah",
      handle: "@priyacodes"
    },
    {
      text: "Encontré un mecánico excelente en Autonexo, ajusté los filtros, y reservé en 15 minutos. Cambio de juego.",
      name: "James Roy",
      handle: "@jamesrdev"
    },
    {
      text: "Como emprendedor solitario, Autonexo me permite moverme rápido sin sacrificar la calidad del servicio. Herramienta esencial.",
      name: "Ayaan Malik",
      handle: "@ayaan_dev"
    },
    {
      text: "No puedo creer lo pulidos que se ven los servicios de Autonexo. Los clientes quedan impresionados cada vez.",
      name: "Monica Reeves",
      handle: "@monicareeves"
    }
  ];

  getLeftTestimonials(): Testimonial[] {
    return this.testimonials.filter((_, index) => index % 3 === 0);
  }

  getCenterTestimonials(): Testimonial[] {
    return this.testimonials.filter((_, index) => index % 3 === 1);
  }

  getRightTestimonials(): Testimonial[] {
    return this.testimonials.filter((_, index) => index % 3 === 2);
  }
}
