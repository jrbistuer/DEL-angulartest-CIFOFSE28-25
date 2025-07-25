import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../../components/header/header';
import { IBook } from '../../models/interfaces';
import { BooksService } from '../../services/books';
import { FormLlibres } from '../../components/form-llibres/form-llibres';

@Component({
  selector: 'app-home',
  imports: [RouterModule, Header, FormLlibres],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  title: string = 'Home';
  llistaLlibres: IBook[] = [];

  index = -1;

  constructor(private booksService: BooksService) {
    this.llistaLlibres = this.booksService.getBooks();
  }

  submitBook(newBook: IBook): void {
    console.log('New book que rebem del component fill:', newBook);
    this.llistaLlibres.push(newBook);
    this.booksService.saveBooks(this.llistaLlibres);
  }


  deleteLlibre(index: number): void {
    this.booksService.deleteBook(index);
    this.llistaLlibres = this.booksService.getBooks();
  }

  editLlibre(index: number): void {
    this.index = index;
  }

  submitEditBook(newBook: IBook): void {
    console.log('New Book al component Home:', newBook);
    this.llistaLlibres[this.index] = newBook;
    this.booksService.saveBooks(this.llistaLlibres);
    this.index = -1; // Reset index after editing
  }

}
