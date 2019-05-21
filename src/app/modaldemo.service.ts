import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModaldemoService {
  modalRef = new Subject<NgbModalRef>();
  constructor() { }
}
