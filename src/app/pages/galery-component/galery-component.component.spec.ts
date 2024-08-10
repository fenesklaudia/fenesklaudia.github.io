import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryComponent } from './galery-component.component';

describe('FirstComponentComponent', () => {
  let component: GaleryComponent;
  let fixture: ComponentFixture<GaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GaleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
