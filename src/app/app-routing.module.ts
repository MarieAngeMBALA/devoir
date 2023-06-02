import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { GamerComponent } from './gamer/gamer.component';
import { PageacceuilComponent } from './pageacceuil/pageacceuil.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PanierComponent } from './panier/panier.component';
import { ComposantComponent } from './composant/composant.component';
import { OrdinateurbureauComponent } from './ordinateurbureau/ordinateurbureau.component';



const routes: Routes = [

  { path: 'pageacceuil', component: PageacceuilComponent },
  { path: 'pagepromotion', component: PromotionComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'gamer', component: GamerComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'composant', component: ComposantComponent },
  { path: 'ordinateurbureau', component: OrdinateurbureauComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

