import { Component, Input, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { IBonus } from 'interfaces/index';
import { ModalComponent } from '../modal-component/modal.component';

@Component({
  selector: 'popup-component',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input() bonus: IBonus;
  @Input() title: string;
  @Input() description: string;
  constructor( private dialog: MatDialog) {}
  ngOnInit(): void {}
  showModal(){
    this.dialog.open(ModalComponent,{data: {bonus: this.bonus}});
  }
}
