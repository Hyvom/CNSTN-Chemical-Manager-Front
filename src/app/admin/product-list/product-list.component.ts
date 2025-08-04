import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  produits: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/api/produits').subscribe({
      next: (data) => this.produits = data,
      error: (err) => console.error('Erreur de chargement des produits', err)
    });
  }
  onEdit(id: number): void {
  this.router.navigate(['/admin/edit-product', id]);
}

onDelete(id: number): void {
  if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
    this.http.delete(`http://localhost:3000/api/produits/${id}`).subscribe({
      next: () => {
        // Supprimer localement après suppression
        this.produits = this.produits.filter(p => p.id !== id);
        alert('Produit supprimé avec succès');
      },
      error: () => alert("Erreur lors de la suppression")
    });
  }
}
}

