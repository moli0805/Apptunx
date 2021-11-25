import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-building-card',
  templateUrl: './building-card.component.html',
  styleUrls: ['./building-card.component.scss'],
})
export class BuildingCardComponent implements OnInit {

  @Input() data:any;

  constructor() {}

  ngOnInit(): void {
  }
}
