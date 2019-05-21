import { Component, OnInit } from '@angular/core';
import { ModaldemoService } from 'src/app/modaldemo.service';
import { ChildComponent } from 'src/app/parent/child/child.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  showModalParent: boolean;
  modalRef;
  constructor(private mds: ModaldemoService, private modalService: NgbModal) { }

  ngOnInit() {
    this.showModalParent = false;
  }
  showModal() {
    this.modalRef = this.modalService.open(ChildComponent);
    this.mds.modalRef.next(this.modalRef);
    console.log('showModal', this.mds.modalRef);
  }
}
