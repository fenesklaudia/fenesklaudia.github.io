import { Component, Input, input } from '@angular/core';
import { OneServiceViewModel } from '../../../vew-models/one-service-view-model';
import { ServiceListService } from '../../../services/service-list.service';
import { PriceCols } from '../../../basic-components/price-details/price-details/price-details.component';

@Component({
  selector: 'app-one-service',
  templateUrl: './one-service.component.html',
  styleUrl: './one-service.component.css'
})
export class OneServiceComponent {
  @Input() service: OneServiceViewModel;
  
  shownCols: PriceCols[] = [PriceCols.price, PriceCols.schedule];

  constructor(public servicesList: ServiceListService) {    
  }
}
