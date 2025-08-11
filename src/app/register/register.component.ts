import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  nom: string = '';
  email: string = '';
  motDePasse: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const user = {
      nom: this.nom,
      email: this.email,
      motDePasse: this.motDePasse
    };

    this.http.post('http://localhost:8080/api/users/register', user)
      .subscribe({
        next: () => this.router.navigate(['/login']),
        error: err => alert('Erreur lors de l’inscription.')
      });
  }
}
