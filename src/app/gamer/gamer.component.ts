import { Component, OnInit } from '@angular/core';
import { PanierService } from '../panier.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.css']
})
export class GamerComponent implements OnInit {
  
  afficherToutes = false;

  private _filtre: string = 'croissant'; // définition de la variable privée _filtre

public get filtre(): string { // le getter
    return this._filtre;
}

public set filtre(value: string) { // le setter
   
    this._filtre = value;
    this.filtrer(); // assurez-vous que la fonction filtrer est appelée ici
}

  infos = [
    {id: 1, info: "ordi1", image:"./assets/ordi1.png", caract: 'Caractéristique PC : MSI <br> Carte graphique : GeForce RTX™ <br> 4080<br> Processeur : Intel® Core™ <br> i9-12900HX<br> RAM : 16 GO<br> Disque dur : SSD 1TO', prix: 1500},
    {id: 2, info: "ordi2", image:"./assets/ordi2.png", caract: 'Caractéristique PC : ASUS<br>Carte graphique : NVIDIA GeForce RTX™ 4050<br> Processeur : 13th Gen Intel® Core™ i9-13900H<br> RAM : 32 GO<br> Disque dur : 1To M.2 SSD 2230', prix: 2000},
    {id: 3, info: "ordi3", image:"./assets/ordi3.png", caract: 'Caractéristique PC : ACER <br> Carte graphique : NVIDIA GeForce RTX 3060<br> Processeur : Intel® Core™ i7-10750H<br> RAM : 32 GO<br> Disque dur :<br> 512 Go SSD', prix: 4200},
    {id: 4, info: "ordi4", image:"./assets/ordi4.jpeg", caract: 'Caractéristique PC : MSI <br> Carte graphique : GeForce RTX™ 4080<br> Processeur : Intel® Core™ i7-12500HX<br> RAM : 16 GO<br> Disque dur : SSD 2TO', prix: 5000},
    {id: 5, info: "ordi5", image:"./assets/ordi5.jpeg", caract: 'Caractéristique PC : ASUS <br> Carte graphique : GeForce RTX™ 4080<br> Processeur : Intel® Core™ i7-12500HX<br> RAM : 16 GO<br> Disque dur : SSD 2TO', prix: 1900},
    {id: 6, info: "ordi6", image:"./assets/ordi6.jpg", caract: 'Caractéristique PC : MSI <br> Carte graphique : GeForce RTX™ 4080<br> Processeur : Intel® Core™ i7-12500HX<br> RAM : 16 GO<br> Disque dur : SSD 2TO', prix: 3500}
  ];

  infostrie = [...this.infos];

  constructor(private panierService: PanierService,public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
  }
  filtrer(): void {
   
    let newInfos;
    if (this.filtre === 'croissant') {
      newInfos = [...this.infostrie.sort((a, b) => a.prix - b.prix)];
    } else if (this.filtre === 'decroissant') {
      newInfos = [...this.infostrie.sort((a, b) => b.prix - a.prix)];
    } else {
      newInfos = [...this.infostrie];
    }
    this.infos = newInfos;
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '80%'
    });
  }
  
  ajouterAuPanier(ordinateur : any) {
    this.panierService.ajouterAuPanier(ordinateur);
  }
  
}
  







 



