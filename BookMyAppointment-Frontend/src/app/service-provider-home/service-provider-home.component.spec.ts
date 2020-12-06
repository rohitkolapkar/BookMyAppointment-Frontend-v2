import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderHomeComponent } from './service-provider-home.component';

describe('ServiceProviderHomeComponent', () => {
  let component: ServiceProviderHomeComponent;
  let fixture: ComponentFixture<ServiceProviderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProviderHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
