import { Component } from '@angular/core';
import { ServiceListService } from '../../services/service-list.service';
import { OneServiceViewModel } from '../../vew-models/one-service-view-model';
import { PriceCols } from '../../basic-components/price-details/price-details/price-details.component';

@Component({
  selector: 'app-prices-component',
  templateUrl: './prices-component.component.html',
  styleUrl: './prices-component.component.css'
})
export class PricesComponent {

  services: OneServiceViewModel[];
  shownCols: PriceCols[] = [PriceCols.price, PriceCols.shortSummary];

  constructor(public servicesList: ServiceListService) {
    this.services = servicesList.services;
  }
}
