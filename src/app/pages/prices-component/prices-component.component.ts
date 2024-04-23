import { Component } from '@angular/core';
import { ServiceListService } from '../../services/service-list.service';
import { OneServiceViewModel } from '../../vew-models/one-service-view-model';

@Component({
  selector: 'app-prices-component',
  templateUrl: './prices-component.component.html',
  styleUrl: './prices-component.component.css'
})
export class PricesComponent {

  services: OneServiceViewModel[];

  constructor(public servicesList: ServiceListService) {
    this.services = servicesList.services;
  }
}
