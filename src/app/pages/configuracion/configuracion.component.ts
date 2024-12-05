import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.css'
})
export default class ConfiguracionComponent {
  passwordActual: string = '';
  passwordNueva: string = '';
  confirmarPassword: string = '';
  habilitarBtn: boolean = false;

  constructor( ) {}


}
