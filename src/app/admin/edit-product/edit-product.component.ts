import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-product.component.html',
})
export class EditProductComponent implements OnInit {
  produit: any = {
    nom: '',
    quantite: '',
    unite: '',
    type: '',
    magasinId: '',
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:3000/api/produits/${id}`).subscribe(data => {
      this.produit = data;
    });
  }

  updateProduit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.put(`http://localhost:3000/api/produits/${id}`, this.produit).subscribe({
      next: () => {
        alert('Produit mis à jour avec succès');
        this.router.navigate(['/admin/products']);
      },
      error: () => alert('Erreur lors de la mise à jour du produit')
    });
  }
}
