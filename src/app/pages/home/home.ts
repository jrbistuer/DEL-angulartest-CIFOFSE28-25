import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../../components/header/header';
import { IBook } from '../../models/interfaces';

@Component({
  selector: 'app-home',
  imports: [RouterModule, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  title: string = 'Home';
  llistaLlibres: any[] = [];

  constructor() {
    // Initialization logic can go here if needed
    const llibre1: IBook = {
      id: 1,
      titol: 'El Quixot',
      autor: 'Miguel de Cervantes',
      anyPublicacio: 1605,
      editorial: 'Editorial Clásicos',
      pagines: 1023
    };
  }

}
