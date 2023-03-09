import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formulario: FormGroup = this.fb.group({
    name: ['Adrian',[Validators.required]],
    email: ['adrian@test.com',[Validators.required, Validators.email]],
    password: ['123456',[Validators.required, Validators.minLength(6)]],
  })
  constructor(private fb: FormBuilder){}

  crear() {
    console.log(this.formulario.value);
    console.log(this.formulario.valid);
    
  }
}
