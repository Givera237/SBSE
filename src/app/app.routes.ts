import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { OffreEmploiComponent } from './offre-emploi/offre-emploi.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ResultatComponent } from './resultat/resultat.component';
import { AjoutOffreComponent } from './ajout-offre/ajout-offre.component';

export const routes: Routes = 
[
    {path : '', component : LandingComponent},
    {path : 'offre', component : OffreEmploiComponent},
    {path : 'dashboard', component : DashboardComponent},
    {path : 'inscription', component : InscriptionComponent},
    {path : 'annonce', component : AnnonceComponent},
    {path : 'resultat', component : ResultatComponent},
    {path : 'ajout_offre', component : AjoutOffreComponent}
];
