import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',] // Ajoutez le fichier de styles ici
})
export class LoginComponent implements OnInit {

  message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onLoginClick(): void {
    this.message = 'Login works!';
  }
}
