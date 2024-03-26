import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionTravelComponent } from './option-travel.component';

describe('OptionTravelComponent', () => {
  let component: OptionTravelComponent;
  let fixture: ComponentFixture<OptionTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionTravelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
