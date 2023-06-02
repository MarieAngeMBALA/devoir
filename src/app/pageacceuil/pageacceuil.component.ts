import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-pageacceuil',
  templateUrl: './pageacceuil.component.html',
  styleUrls: ['./pageacceuil.component.css']
})
export class PageacceuilComponent {
  constructor(public dialog: MatDialog) { 
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '80%'
    });
  }
}
