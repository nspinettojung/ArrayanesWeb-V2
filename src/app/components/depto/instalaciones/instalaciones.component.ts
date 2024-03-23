import { Component, Input } from '@angular/core';
import { Depto1Component } from '../depto1';
import { Depto2Component } from '../depto2';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-instalaciones',
  standalone: true,
  imports: [Depto1Component, Depto2Component, ModalComponent],
  templateUrl: './instalaciones.component.html',
  styleUrl: './instalaciones.component.css'
})
export class InstalacionesComponent {
  @Input() depto: string = '';
}
