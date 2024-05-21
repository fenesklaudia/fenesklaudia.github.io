import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, input } from '@angular/core';
import { OneServiceViewModel } from '../../../vew-models/one-service-view-model';
import { ServiceListService } from '../../../services/service-list.service';

@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrl: './price-details.component.css'
})
export class PriceDetailsComponent implements OnChanges {
  @Input() service: OneServiceViewModel;
  @Input() cols: PriceCols[];

  hintMap: { [name: string]: { hintIndex: number } } = {};
  hints: string[] = [];

  filterType = PriceCols;

  constructor(public servicesList: ServiceListService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.hintMap = {};
    this.hints = [];
    for (let key in this.service.details) {
      if (!this.service.details || !this.service.details[key].hint) {
        continue;
      }

      const hintIndex = this.hints.findIndex(x => x === this.service.details![key].hint)
      if (hintIndex >= 0) {
        this.hintMap[key] = { hintIndex: hintIndex };
      } else {
        this.hints.push(this.service.details[key].hint!);
        this.hintMap[key] = { hintIndex: this.hints.length - 1 };
      }
    }
  }

  show(filter: PriceCols): boolean {
    return this.cols.findIndex(x => x === filter) >= 0;
  }

  getHintCount(key: string): number {
    return this.hintMap[key]?.hintIndex;
  }

  writeStarNumber(count: number): string {
    let stars = '';
    for (let i = 0; i < count + 1; i++) {
      stars += '*';
    }
    return stars;
  }
}

export enum PriceCols {
  price,
  schedule,
  shortSummary
}
