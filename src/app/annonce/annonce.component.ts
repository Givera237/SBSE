import { Component, inject, signal, TemplateRef, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-annonce',
  standalone: true,
  imports: [NgbDatepickerModule],
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent {

  annonces = [1, 2, 3, 4, 5]; // Tu pourras remplacer ça par des objets plus tard

  private modalService = inject(NgbModal);
  closeResult: WritableSignal<string> = signal('');

  constructor(private router: Router) {}

  open(content: TemplateRef<any>): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult.set(`Closed with: ${result}`);
      },
      (reason) => {
        this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
      }
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'en appuyant sur Échap';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'en cliquant en dehors du modal';
      default:
        return `avec : ${reason}`;
    }
  }

  onViewAnnonce(): void {
    this.router.navigateByUrl(`offre`);
  }

  confirmDelete(index: number): void {
    const confirmation = confirm(`Voulez-vous vraiment supprimer l'annonce n°${index + 1} ?`);
    if (confirmation) {
      this.annonces.splice(index, 1);
      console.log(`Annonce ${index + 1} supprimée.`);
    }
  }
}
