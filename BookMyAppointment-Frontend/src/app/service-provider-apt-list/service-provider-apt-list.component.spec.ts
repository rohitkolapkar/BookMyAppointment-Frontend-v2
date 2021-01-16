import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderAptListComponent } from './service-provider-apt-list.component';

describe('ServiceProviderAptListComponent', () => {
  let component: ServiceProviderAptListComponent;
  let fixture: ComponentFixture<ServiceProviderAptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProviderAptListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderAptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
