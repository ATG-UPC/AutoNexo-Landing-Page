import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" *ngIf="isOpen" (click)="onOverlayClick($event)">
      <div class="modal-container" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2 class="modal-title">{{ title }}</h2>
        </div>
        <div class="modal-content">
          <div class="modal-text" [innerHTML]="content"></div>
        </div>
        <div class="modal-footer">
          <button class="modal-ok-btn" (click)="onClose()">OK</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 20px;
    }

    .modal-container {
      background: #1a1a1a;
      border-radius: 12px;
      max-width: 600px;
      width: 100%;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    }

    .modal-header {
      padding: 24px 24px 16px 24px;
      border-bottom: 1px solid #3C0007;
    }

    .modal-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #FFFFFF;
      margin: 0;
    }

    .modal-content {
      padding: 24px;
    }

    .modal-text {
      font-size: 16px;
      line-height: 1.6;
      color: #BEBEBE;
      text-align: left;
    }

    .modal-footer {
      padding: 16px 24px 24px 24px;
      display: flex;
      justify-content: center;
    }

    .modal-ok-btn {
      background: #7B0E12;
      color: #FFFFFF;
      border: none;
      border-radius: 8px;
      padding: 12px 32px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .modal-ok-btn:hover {
      background: #5C0A0D;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(123, 14, 18, 0.3);
    }

    @media (max-width: 768px) {
      .modal-container {
        margin: 10px;
        max-height: 90vh;
      }
      
      .modal-header,
      .modal-content,
      .modal-footer {
        padding: 16px;
      }
      
      .modal-title {
        font-size: 1.25rem;
      }
      
      .modal-text {
        font-size: 14px;
      }
    }
  `]
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() content = '';
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onOverlayClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
