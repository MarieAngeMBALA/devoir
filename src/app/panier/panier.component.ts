import { Component, OnInit } from '@angular/core';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panier: any;

  constructor(private panierService: PanierService) { }

  ngOnInit() {
    this.panierService.getPanier().subscribe(panier => {
      this.panier = panier;
    });
  }

  supprimerDuPanier(produit:any) {
    const index = this.panier.indexOf(produit);
    if (index > -1) {
      this.panier.splice(index, 1);
    }
}
getTotal() {
  let total = 0;
  for(let item of this.panier) {
    total += item.prix;
  }
  return total;
}

}







