import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home',
  imports: [RouterModule, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  title: string = 'Home';

  constructor() {
    // Initialization logic can go here if needed
  }

}
