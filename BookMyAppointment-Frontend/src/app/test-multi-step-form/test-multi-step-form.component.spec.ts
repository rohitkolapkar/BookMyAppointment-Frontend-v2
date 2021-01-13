import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMultiStepFormComponent } from './test-multi-step-form.component';

describe('TestMultiStepFormComponent', () => {
  let component: TestMultiStepFormComponent;
  let fixture: ComponentFixture<TestMultiStepFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMultiStepFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMultiStepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
