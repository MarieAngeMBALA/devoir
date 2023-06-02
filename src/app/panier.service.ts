// src/app/panier.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private panier: any = [];
  private panierSubject = new BehaviorSubject<any>([]);

  constructor() { }

  getPanier() {
    return this.panierSubject.asObservable();
  }

  ajouterAuPanier(produit: any) {
    this.panier.push(produit);
    this.panierSubject.next(this.panier);
  }

  supprimerDuPanier(produit:any) {
    const index = this.panier.indexOf(produit);
    if (index > -1) {
      this.panier.splice(index, 1);
    }
  }
  
  getNombre(){
    return this.panier.length
  }
  
}





