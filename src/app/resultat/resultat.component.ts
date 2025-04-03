import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';


@Component({
  selector: 'app-resultat',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './resultat.component.html',
  styleUrl: './resultat.component.scss'
})
export class ResultatComponent 
{

}
