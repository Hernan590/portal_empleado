import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { BodyComponent } from "../body/body.component";
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd  } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-cambiar-contra',
  standalone: true,
  imports: [ BodyComponent, SidebarComponent, CommonModule, RouterOutlet],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export default class MainComponent implements OnInit {
  isSideNavCollapsed = false;
  screenWidth = 0;
  saludo: string = 'Bienvenido(a)';
  showContent = true;

  constructor(private router: Router) { } // Inyectar ChangeDetectorRef

  ngOnInit(): void {
    const sexo = localStorage.getItem('sexo');
    this.showContent = this.router.url === '/empleado';

    if (sexo === 'M') {
      this.saludo = 'Bienvenido';
    } else if (sexo === 'F') {
      this.saludo = 'Bienvenida';
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Comprobar si la ruta es diferente a la que quieres mostrar el contenido
        this.showContent = this.router.url === '/empleado';
      }
    });
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

}