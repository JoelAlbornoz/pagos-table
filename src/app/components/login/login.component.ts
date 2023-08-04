import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Credenciales hardcodeadas
  hardcodedUsername = 'user360';
  hardcodedPassword = 'password360';

  constructor(private router: Router) {}

  login() {
    if (
      this.username === this.hardcodedUsername &&
      this.password === this.hardcodedPassword
    ) {
      //Simula el login exitoso
      this.errorMessage = '';
      localStorage.setItem('token360', 'ABC123');
      //Redirige a una ruta luego del login
      this.router.navigate(['/table']);
    } else {
      this.errorMessage = 'Usuario o contraseña invalidos';
    }
  }
}
