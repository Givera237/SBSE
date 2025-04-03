import { Component, inject, signal, TemplateRef, WritableSignal } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Router} from '@angular/router';


import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-annonce',
  standalone: true,
  imports: [NgbDatepickerModule],
  templateUrl: './annonce.component.html',
  styleUrl: './annonce.component.scss'
})
export class AnnonceComponent 
{

  constructor(
    private router : Router ){}


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

  onViewAnnonce() : void
  {
      this.router.navigateByUrl(`offre`); 
  }
}

