import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formulario: FormGroup = this.fb.group({
    name: ['Adrian', [Validators.required]],
    email: ['adrian@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  })
  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  crear() {
    const { name, email, password } = this.formulario.value;
    this.authService.crearUsuario(name, email, password)
      .subscribe((valid) => {
        if (valid === true) {
          this.router.navigateByUrl('/dashboard');
        } else {
          Swal.fire('Error', valid, 'error');
        }
      })
  }
}
