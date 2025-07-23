import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../../components/header/header';
import { IBook } from '../../models/interfaces';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BooksService } from '../../services/books';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-home',
  imports: [RouterModule, Header, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  title: string = 'Home';
  llistaLlibres: IBook[] = [];

  index = 0;

  bookForm!: FormGroup; // Define the type of bookForm if using Reactive Forms

  constructor(private booksService: BooksService) {
    this.llistaLlibres = this.booksService.getBooks();
    this.createBookForm();
  }

  createBookForm(): void {
    this.bookForm = new FormGroup({
      titol: new FormControl('', [Validators.required, Validators.minLength(3)]),
      autor: new FormControl('', Validators.required),
      anyPublicacio: new FormControl(''),
      editorial: new FormControl('', Validators.required),
      pagines: new FormControl('', Validators.required),
      isbn: new FormControl('')
    });
  }

  submitBook(): void {
    if (this.bookForm.valid) {
      const newBook: IBook = this.bookForm.value;
      this.llistaLlibres.push(newBook);
      this.booksService.saveBooks(this.llistaLlibres);
      this.bookForm.reset();
    }
  }

  submitEditBook() {
    if (this.bookForm.valid) {
      const newBook: IBook = this.bookForm.value;
      this.llistaLlibres[this.index] = newBook;
      this.booksService.saveBooks(this.llistaLlibres);
      this.bookForm.reset();
    }
  }

  deleteLlibre(index: number): void {
    this.booksService.deleteBook(index);
    this.llistaLlibres = this.booksService.getBooks();
  }

  editLlibre(index: number): void {
    this.index = index;

    const bookToEdit = this.llistaLlibres[index];
    this.bookForm.setValue({
      titol: bookToEdit.titol,
      autor: bookToEdit.autor,
      anyPublicacio: bookToEdit.anyPublicacio || '',
      editorial: bookToEdit.editorial,
      pagines: bookToEdit.pagines,
      isbn: bookToEdit.isbn || ''
    });
  }

}
