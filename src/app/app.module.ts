import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageacceuilComponent } from './pageacceuil/pageacceuil.component';
import { ComposantComponent } from './composant/composant.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { GamerComponent } from './gamer/gamer.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PanierComponent } from './panier/panier.component';
import { PromotionComponent } from './promotion/promotion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { OrdinateurbureauComponent } from './ordinateurbureau/ordinateurbureau.component'; 


@NgModule({
  declarations: [
    AppComponent,
    PageacceuilComponent,
    ComposantComponent,
    FormulaireComponent,
    GamerComponent,
    InscriptionComponent,
    PanierComponent,
    PromotionComponent,
    DialogComponent,
    OrdinateurbureauComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
