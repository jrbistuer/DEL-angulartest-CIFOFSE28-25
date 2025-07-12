import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-login',
  imports: [RouterModule, Header],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  title: string = 'Login';

  constructor() {
    // Initialization logic can go here if needed
  } 

}
