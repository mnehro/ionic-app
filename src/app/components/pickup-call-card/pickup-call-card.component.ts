import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent implements OnInit {
  @Input() hasHeader: boolean = true;
  @Input() hasFooter: boolean = true;
  @Input() status: string = "";
  @Input() createdAt: string = "";
  @Input() updatedAt: string = "";
  @Input() notes: string = "";
  @Input() value: string = "";
  @Input() seeAllMethod!: (() => void);

  constructor(private router: Router) { }

  ngOnInit() { }


}
