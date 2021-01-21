import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'popup-component',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  constructor() {}
  ngOnInit(): void {}
}
