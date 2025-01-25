import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSimpleComponent } from './services-simple.component';

describe('ServicesSimpleComponent', () => {
  let component: ServicesSimpleComponent;
  let fixture: ComponentFixture<ServicesSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesSimpleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
