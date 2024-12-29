import { Component, OnInit } from '@angular/core';
import { OneServiceViewModel } from '../../vew-models/one-service-view-model';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceListService } from '../../services/service-list.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  subpage: string = '';

  services: OneServiceViewModel[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private servicesList: ServiceListService) {
    this.route.params.subscribe((_) => {
      this.subpage = route.snapshot.params['subpage'];
    });

    this.initServices();
  }

  ngOnInit(): void {
    if (!this.getService(this.subpage)) {
      const link = this.services[0].link
      this.router.navigate(['services', link])
    }
  }

  initServices() {
    this.services = this.servicesList.services;
  }

  getService(serviceLink: string): OneServiceViewModel {
    return this.services?.find(x => x.link === serviceLink)!;
  }
}
