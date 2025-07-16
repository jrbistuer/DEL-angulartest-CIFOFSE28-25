import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from "../../components/header/header";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [RouterModule, Header, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  title: string = 'Login';

  loginForm!: FormGroup; // Define the type of loginForm if using Reactive Forms

  constructor() {
    // Initialization logic can go here if needed
    this.createForm();
  }

  enviar() {
    // Logic to handle form submission can be added here
    console.log('Form submitted');
    const usuari = (document.getElementById('username') as HTMLInputElement).value;
    const contrasenya = (document.getElementById('password') as HTMLInputElement).value;
    console.log(`Usuari: ${usuari}, Contrasenya: ${contrasenya}`);
    // You can add further logic to handle the login process
  }

  enviarReactiveForm() {
    // Logic to handle form submission with Reactive Forms
    console.log('Reactive Form submitted', this.loginForm);
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log(`Username: ${username}, Password: ${password}`);
      // You can add further logic to handle the login process
    } else {
      console.log('Form is invalid');
    }
  }

  createForm() {
    // Logic to create a form can be added here if needed
    console.log('Creating form');
    // Creating Reactive Form
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

}
