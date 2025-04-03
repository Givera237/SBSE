import { Component, inject, signal, TemplateRef, WritableSignal } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-offre-emploi',
  standalone: true,
  imports: [CdkDropList, CdkDrag],
  templateUrl: './offre-emploi.component.html',
  styleUrl: './offre-emploi.component.scss'
})
export class OffreEmploiComponent 
{
  items = [
    { name: "Niveau d'éducation", score: 0 },
    { name: 'Expérience ', score: 0 },
    { name: 'Compétences ', score: 0 },
    { name: 'Performance aux tests', score: 0 },
    { name: 'Références ', score: 0 },
    { name: 'disponibilité ', score: 0 },
    { name: 'langue ', score: 0 },
    { name: 'localisation ', score: 0 },
    { name: 'other ', score: 0 },
  ];

  drop(event: CdkDragDrop<{ name: string; score: number }[]>) 
  {
    // Déplacer l'élément
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);

    // Réinitialiser les scores
    this.items.forEach((item, index) => {
      item.score = this.calculateScore(index + 1); // Calculer le score basé sur la position
    });
  }

  // Fonction pour attribuer un score basé sur la position
  calculateScore(position: number): number 
  {
    return position ; // Exemple : chaque position vaut 10 points
  }


    private modalService = inject(NgbModal);
    closeResult: WritableSignal<string> = signal('');
  
    open(content: TemplateRef<any>) 
    {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          this.closeResult.set(`Closed with: ${result}`);
        },
        (reason) => {
          this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
        },
      );
    }
  
    private getDismissReason(reason: any): string 
    {
      switch (reason) 
      {
        case ModalDismissReasons.ESC:
          return 'by pressing ESC';
        case ModalDismissReasons.BACKDROP_CLICK:
          return 'by clicking on a backdrop';
        default:
          return `with: ${reason}`;
      }
    }
}
