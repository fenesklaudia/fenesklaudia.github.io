import { Component, Input, OnInit } from '@angular/core';
import { OneServiceViewModel } from '../../vew-models/one-service-view-model';
import { ActivatedRoute } from '@angular/router';
import { ServiceListService } from '../../services/service-list.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  subpage = '';

  services: { [id: string]: OneServiceViewModel };

  constructor(private route: ActivatedRoute, private servicesList: ServiceListService) {
    this.route.params.subscribe((_) => {
      this.subpage = route.snapshot.params['subpage'];
    });

    this.initServices();
  }

  initServices() {
    this.services = this.servicesList.services;
  }

  ngOnInit(): void {
    console.log('asd');
  }
}
