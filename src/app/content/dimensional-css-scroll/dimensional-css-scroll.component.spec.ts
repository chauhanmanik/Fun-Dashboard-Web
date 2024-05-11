import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionalCssScrollComponent } from './dimensional-css-scroll.component';

describe('DimensionalCssScrollComponent', () => {
  let component: DimensionalCssScrollComponent;
  let fixture: ComponentFixture<DimensionalCssScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DimensionalCssScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DimensionalCssScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
