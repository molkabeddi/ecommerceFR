import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Ensure this import
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) { } // Ensure HttpClient is injected

  signUp(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user); // Ensure HttpClient is used correctly
  }
}
