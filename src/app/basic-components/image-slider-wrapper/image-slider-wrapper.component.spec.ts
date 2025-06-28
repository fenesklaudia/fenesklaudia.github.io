import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSliderWrapperComponent } from './image-slider-wrapper.component';

describe('ImageSliderWrapperComponent', () => {
  let component: ImageSliderWrapperComponent;
  let fixture: ComponentFixture<ImageSliderWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageSliderWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSliderWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
