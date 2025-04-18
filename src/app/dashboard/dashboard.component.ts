import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent 
{

    constructor( private router : Router ){}
  
  onViewAnnonce() : void
  {
      this.router.navigateByUrl(`annonce`); 
  }

  ajoutNouvelleOffre() : void
  {
      this.router.navigateByUrl(`ajout_offre`); 
  }
}
