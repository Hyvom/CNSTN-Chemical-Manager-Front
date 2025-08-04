import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <-- Import ici
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demande-create',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- Ajouter FormsModule ici
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  produitId: string = '';
  quantite: number | null = null;
  service: string = '';
  commentaire: string = '';

  envoyerDemande() {
    const demande = {
      produitId: this.produitId,
      quantite: this.quantite,
      service: this.service,
      commentaire: this.commentaire
    };

    console.log('Demande envoyée :', demande);
    // Ici tu pourras connecter ça à ton backend plus tard
  }
}
