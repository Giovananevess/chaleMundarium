import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsChaleComponent } from './details-chale.component';

describe('DetailsChaleComponent', () => {
  let component: DetailsChaleComponent;
  let fixture: ComponentFixture<DetailsChaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsChaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsChaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
