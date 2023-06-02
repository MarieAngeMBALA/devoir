import { Component } from '@angular/core';
import { PanierService } from './panier.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TPfr';

  constructor(private panierService: PanierService,public dialog: MatDialog) { 
    
  }

  getNombre() {
    return this.panierService.getNombre();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '80%'
    });
  }

}
