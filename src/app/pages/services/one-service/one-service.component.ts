import { Component, Input, input } from '@angular/core';
import { OneServiceViewModel } from '../../../vew-models/one-service-view-model';
import { ServiceListService } from '../../../services/service-list.service';

@Component({
  selector: 'app-one-service',
  templateUrl: './one-service.component.html',
  styleUrl: './one-service.component.css'
})
export class OneServiceComponent {
  @Input() service: OneServiceViewModel;

  constructor(public servicesList: ServiceListService) {    
  }
}
