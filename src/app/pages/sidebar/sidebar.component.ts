import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { navbarData } from './nav-data';
// import { dataService } from '../../services/login.service';
import Swal from 'sweetalert2';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit{

  constructor() {}
  nombre1: string = "Usuario";
  apellido1: string = "Admin";

  // nombre1: string | null = localStorage.getItem('nombre1');
  // apellido1: string | null = localStorage.getItem('apellido1');

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = true;
  screenWidth = 0;
  navData = navbarData;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 500 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 500) {
      this.collapsed = false;
    } else {
      this.collapsed = true;
    }
  }

  cerrarSesion(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Cerrarás sesión de tu cuenta.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Cerrando sesión...',
          text: 'Por favor espera.',
          allowEscapeKey: false,
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          }
        });
  
        setTimeout(() => {
          // Limpiar datos de sesión en localStorage
          localStorage.removeItem('username');
          localStorage.removeItem('password');
          localStorage.removeItem('recordar_contra_usuario');
  
          // Simular el cierre de sesión exitoso
          Swal.fire({
            title: '¡Sesión cerrada!',
            text: 'Has cerrado sesión con éxito.',
            icon: 'success'
          }).then(() => {
            // Navegar a la página de inicio de sesión o recargar
            window.location.href = '/portal_empleado/login'; // Cambiar ruta según sea necesario
          });
        }, 1000); 
      }
    });
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

}
