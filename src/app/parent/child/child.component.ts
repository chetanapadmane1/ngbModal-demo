import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModaldemoService } from 'src/app/modaldemo.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  modalRef;
  showModal: boolean;
  constructor(private modalService: NgbModal, private mds: ModaldemoService) {
    this.mds.modalRef.subscribe((modalRef) => {
      this.modalRef = modalRef;
    });
  }
  ngOnInit() {
  }

  dismiss() {
    console.log('dismiss', this.modalRef);
    this.modalRef.dismiss();
    this.mds.modalRef.next(null);
  }
  close(reportContent) {
    console.log('close', reportContent);
    this.modalRef.close();
    this.mds.modalRef.next(null);
  }
}
