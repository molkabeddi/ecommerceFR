export interface User {
    name: string;
    email: string;
    password: string;
    address?: string; // Facultatif, le '?' indique que le champ est optionnel
    phoneNumber?: string; // Facultatif
  }
  