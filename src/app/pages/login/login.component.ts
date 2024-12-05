import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
            CommonModule,
            FormsModule,
          ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  username: string = '';
  password: string = '';
  verContra: boolean = false;
  imageSrc: string = 'assets/web5.png';
  recordar_contra_usuario: boolean = false;

  constructor(private router: Router) {
    this.updateImageSrc(window.innerWidth); 
  }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.updateImageSrc(event.target.innerWidth);
    }

    updateImageSrc(windowWidth: number) {
      if (windowWidth <= 991) {
        this.imageSrc = 'assets/mobil2.png';
      } else {
        this.imageSrc = 'assets/web5.png';
      }
    }

    ngOnInit(): void {
      // Verificar si estamos en un entorno donde `window` está disponible
      if (typeof window !== 'undefined') {
        // Leer valores de localStorage
        const recordarUsuario = localStorage.getItem('recordar_contra_usuario') === 'true';
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
    
        // Si se seleccionó recordar, asignar los valores a las variables
        if (recordarUsuario) {
          this.username = storedUsername || '';
          this.password = storedPassword || '';
          this.recordar_contra_usuario = true;
        } else {
          // Asegurarse de que no queden valores residuales si no se recuerda
          this.username = '';
          this.password = '';
          this.recordar_contra_usuario = false;
        }
      }
    }

  onLogin() {
    const data = {
      username: this.username,
      password: this.password
    };
  
    // Manejo de recordar contraseña
    if (this.recordar_contra_usuario) {
      localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.password);
      localStorage.setItem('recordar_contra_usuario', 'true');
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.removeItem('recordar_contra_usuario');
    }
  
    // Validaciones
    if (!data.username) {
      Swal.fire('Error!', 'Por favor digite el usuario.', 'error');
      return;
    }
  
    if (!data.password) {
      Swal.fire('Error!', 'Por favor digite la contraseña.', 'error');
      return;
    }
  
    // Datos locales simulados
    const mockUser = {
      username: 'admin',
      password: '12345' // Contraseña simulada
    };
  
    // Validación local
    if (data.username === mockUser.username && data.password === mockUser.password) {
      const userData = { username: mockUser.username }; // Datos simulados del usuario
      localStorage.setItem('userData', JSON.stringify(userData)); // Guardar los datos del usuario localmente
  
      // Swal.fire({
      //   title: '¡Éxito!',
      //   text: 'Inicio de sesión exitoso.',
      //   icon: 'success'
      // });
  
      this.router.navigate(['/empleado']); // Navegar al componente empleado
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Usuario o contraseña incorrectos.',
        icon: 'error'
      });
    }
  }

  verPassword() {
    this.verContra = !this.verContra;
    const passwordField = document.getElementById('password') as HTMLInputElement;
    if (this.verContra) {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
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
