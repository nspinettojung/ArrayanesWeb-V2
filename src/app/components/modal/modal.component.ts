import { Component, Input,  TemplateRef, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Depto1Component } from "../depto/depto1/depto1.component";
import { Depto2Component } from "../depto/depto2/depto2.component";


@Component({
    selector: 'app-modal',
    standalone: true,
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.css',
    imports: [CommonModule, Depto1Component, Depto2Component],
    encapsulation: ViewEncapsulation.None,
})
export class ModalComponent {
  private modalService = inject(NgbModal);
  @Input() depto: string = '';
  
  openFullscreen(content: TemplateRef<any>) {
		this.modalService.open(content, { fullscreen: true });
    
	}
}
