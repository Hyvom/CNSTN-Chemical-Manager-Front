import { Produit } from './produit';
import { User } from './user';

export interface Demande {
  id?: number;                
  nomDemandeur: string;
  serviceDemandeur: string;
  etat: string;
  quantite: number;
  dateDemande: string;
  produit?: Produit;
  user?: User;
}
