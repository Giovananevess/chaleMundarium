import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailsChaleCanadenseComponent } from './datails-chale-canadense.component';

describe('DatailsChaleCanadenseComponent', () => {
  let component: DatailsChaleCanadenseComponent;
  let fixture: ComponentFixture<DatailsChaleCanadenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatailsChaleCanadenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatailsChaleCanadenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
