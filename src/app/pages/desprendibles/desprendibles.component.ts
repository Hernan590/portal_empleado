import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-desprendibles',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './desprendibles.component.html',
  styleUrl: './desprendibles.component.css'
})
export default class DesprendiblesComponent implements OnInit {
  lista_desprendible: any[] = [];
  datosQuincenas: any = {};
  mostrarElemento: boolean = true;
  esPrimaDeServicios: boolean = false;
  nombreSeleccionado: string = ''; 
  yearSeleccionado: string = '';
  mesSeleccionado: string = '';

  constructor() {}

  ngOnInit(): void {

  }

  regresar() {
    this.mostrarElemento = true
  }

}
