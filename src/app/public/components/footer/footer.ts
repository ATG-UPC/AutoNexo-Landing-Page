import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, TranslateModule, ModalComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  isPrivacyModalOpen = false;
  isTermsModalOpen = false;
  isCookiesModalOpen = false;
  isAccessibilityModalOpen = false;

  openModal(modalType: string) {
    this.closeAllModals();
    switch (modalType) {
      case 'privacy':
        this.isPrivacyModalOpen = true;
        break;
      case 'terms':
        this.isTermsModalOpen = true;
        break;
      case 'cookies':
        this.isCookiesModalOpen = true;
        break;
      case 'accessibility':
        this.isAccessibilityModalOpen = true;
        break;
    }
  }

  closeAllModals() {
    this.isPrivacyModalOpen = false;
    this.isTermsModalOpen = false;
    this.isCookiesModalOpen = false;
    this.isAccessibilityModalOpen = false;
  }

  getPrivacyContent() {
    return `AutoNexo valora la privacidad de todos sus usuarios. La información que recopilamos —como nombres, direcciones de correo electrónico, datos de contacto y, en algunos casos, información del vehículo— se utiliza exclusivamente para garantizar el correcto funcionamiento de nuestros servicios.<br><br>
    
    Toda la información personal se maneja de acuerdo con las leyes de protección de datos vigentes, y se almacena de manera segura en nuestros servidores. No compartimos, vendemos ni alquilamos datos personales a terceros, salvo cuando sea necesario para cumplir con la ley o con los servicios solicitados por el usuario (por ejemplo, conectar a un mecánico certificado).<br><br>
    
    El usuario tiene derecho a solicitar en cualquier momento la actualización o eliminación de su información personal. En caso de que desee ejercer estos derechos, podrá hacerlo escribiendo a <strong>contacto@autonexo.com</strong>.<br><br>
    
    AutoNexo mantiene prácticas de seguridad digital avanzadas, como cifrado de extremo a extremo y autenticación segura. Nuestro objetivo es ofrecer transparencia y confianza en cada interacción.<br><br>
    
    <em>Última actualización: enero 2025.</em>`;
  }

  getTermsContent() {
    return `Al acceder y utilizar los servicios de AutoNexo, el usuario acepta los presentes términos y condiciones. AutoNexo actúa como una plataforma intermediaria entre conductores y mecánicos certificados, facilitando la solicitud y gestión de servicios automotrices de forma digital.<br><br>
    
    El usuario se compromete a proporcionar información veraz y actualizada, y a usar la aplicación únicamente para fines legales y de buena fe. AutoNexo no se responsabiliza por los servicios prestados directamente por los mecánicos, pero sí garantiza que los profesionales mostrados en la plataforma han sido verificados según nuestros estándares de calidad y cumplimiento.<br><br>
    
    AutoNexo puede realizar actualizaciones o mejoras en la plataforma sin previo aviso, buscando siempre optimizar la experiencia del usuario. Cualquier cambio en los términos será notificado a través de la app o el sitio web.<br><br>
    
    El uso continuo de nuestros servicios implica la aceptación de las versiones más recientes de estos términos.<br><br>
    
    <em>Última actualización: enero 2025.</em>`;
  }

  getCookiesContent() {
    return `AutoNexo utiliza cookies y tecnologías similares para mejorar tu experiencia de navegación. Estas herramientas permiten recordar tus preferencias, personalizar los servicios mostrados y analizar el rendimiento del sitio.<br><br>
    
    Las cookies no almacenan información personal sensible, pero sí pueden incluir datos sobre tu sesión, idioma, ubicación aproximada y tipo de dispositivo. Puedes gestionar o desactivar las cookies desde la configuración de tu navegador en cualquier momento, aunque hacerlo podría limitar algunas funciones del sitio.<br><br>
    
    También usamos cookies analíticas y de rendimiento para entender mejor el comportamiento de nuestros usuarios y optimizar la plataforma. AutoNexo no comparte estos datos con terceros con fines comerciales.<br><br>
    
    <em>Última actualización: enero 2025.</em>`;
  }

  getAccessibilityContent() {
    return `AutoNexo está comprometido con la accesibilidad digital y con garantizar que todas las personas, independientemente de sus capacidades físicas o cognitivas, puedan usar nuestros servicios.<br><br>
    
    Trabajamos constantemente en el cumplimiento de las normas internacionales WCAG 2.1 (Web Content Accessibility Guidelines), implementando contraste de colores adecuados, navegación por teclado, etiquetas ARIA y estructuras semánticas comprensibles para lectores de pantalla.<br><br>
    
    Además, invitamos a nuestros usuarios a reportar cualquier barrera de accesibilidad que encuentren escribiendo a <strong>soporte@autonexo.com</strong>. Nuestro equipo revisará cada caso y propondrá una solución lo antes posible.<br><br>
    
    Creemos que la inclusión tecnológica es parte esencial del futuro de la movilidad digital.<br><br>
    
    <em>Última actualización: enero 2025.</em>`;
  }
}
