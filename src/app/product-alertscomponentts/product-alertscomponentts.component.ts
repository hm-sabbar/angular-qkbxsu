import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-alertscomponentts',
  templateUrl: './product-alertscomponentts.component.html',
  styleUrls: ['./product-alertscomponentts.component.css']
})
export class ProductAlertscomponenttsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}import { Input } from '@angular/core';
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit() {
  }

}
