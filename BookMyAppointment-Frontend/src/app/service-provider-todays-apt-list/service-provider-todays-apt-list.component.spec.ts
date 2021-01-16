import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderTodaysAptListComponent } from './service-provider-todays-apt-list.component';

describe('ServiceProviderTodaysAptListComponent', () => {
  let component: ServiceProviderTodaysAptListComponent;
  let fixture: ComponentFixture<ServiceProviderTodaysAptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProviderTodaysAptListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderTodaysAptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
