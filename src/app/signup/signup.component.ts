// src/app/signup/signup.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';  // Ensure this doesn't import AuthService

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: User = {
    name: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: ''
  };

  constructor(private authService: AuthService) { }

  signUp(): void {
    this.authService.signUp(this.user)
      .subscribe(
        response => {
          console.log('User registered successfully!', response);
          // Réinitialiser le formulaire ou naviguer vers une autre page
        },
        error => {
          console.error('Failed to register user!', error);
          // Gérer les erreurs, afficher un message à l'utilisateur, etc.
        }
      );
  }
}
