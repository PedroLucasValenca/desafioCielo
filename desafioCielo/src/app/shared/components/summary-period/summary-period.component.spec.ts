import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPeriodComponent } from './summary-period.component';

describe('SummaryPeriodComponent', () => {
  let component: SummaryPeriodComponent;
  let fixture: ComponentFixture<SummaryPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryPeriodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
