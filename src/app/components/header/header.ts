import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  @Input() title!: string;

  constructor() {
    // Initialization logic can go here if needed
  }

}
