import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOpeningComponent } from './product-opening.component';

describe('ProductOpeningComponent', () => {
  let component: ProductOpeningComponent;
  let fixture: ComponentFixture<ProductOpeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOpeningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
