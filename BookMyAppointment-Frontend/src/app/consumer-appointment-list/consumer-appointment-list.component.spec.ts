import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerAppointmentListComponent } from './consumer-appointment-list.component';

describe('ConsumerAppointmentListComponent', () => {
  let component: ConsumerAppointmentListComponent;
  let fixture: ComponentFixture<ConsumerAppointmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerAppointmentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerAppointmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
