import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-empleado',
  standalone: true,
  imports: [ 
            CommonModule,
            FormsModule
          ],
  templateUrl: './mis_datos.component.html',
  styleUrl: './mis_datos.component.css'
})
export default class PerfilEmpleadoComponent implements OnInit {
  correo: string = "juanito@gmail.com"
  modalClass: string = 'modal-lg'; // Clase inicial para pantallas grandes
  identificacionData: any = {};
  datosPersonales: any = {};
  datoCorreo: any = {};
  datoTelefonos: any[] = [];
  datosSeguridadSocial: any = {};
  datosContratacion: any = {};
  detallesTelefono: any = {};
  telefononuevo: string = '';
  correoNuevo: string = ''

  constructor() {}

  ngOnInit() {
    this.checkScreenSize(); // Verificar el tamaño al cargar la página
  }

  // Escucha los cambios de tamaño de la pantalla
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  // Función para verificar el tamaño de la pantalla y ajustar la clase
  checkScreenSize() {
    if (window.innerWidth < 767) {
      this.modalClass = 'modal-sm'; // Cambiar a modal pequeño para pantallas pequeñas
    } else {
      this.modalClass = 'modal-lg'; // Usar modal grande para pantallas más grandes
    }
  }


  numeros(event: KeyboardEvent): boolean {
    const key = event.keyCode || event.which;
    const tecla = String.fromCharCode(key).toLowerCase();
    const letras = ' 0123456789';
    const especiales = [8, 37, 39, 46];

    let tecla_especial = false;
    for (let i in especiales) {
      if (key === especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) === -1 && !tecla_especial) {
      return false;
    }

    return true;
  }
}
