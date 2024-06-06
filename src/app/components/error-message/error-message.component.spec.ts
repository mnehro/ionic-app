import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;
  let formGroup: FormGroup;
  beforeEach(waitForAsync(() => {
    formGroup = new FormGroup({});
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), ErrorMessageComponent, CommonModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show an error message when field touch and error present', () => {
    formGroup.addControl('email', new FormControl());
    component.field = formGroup.get('email');

    component?.field?.markAsTouched();
    component?.field?.setErrors({ anyError: true });
    component.error = 'anyError';

    expect(component.shouldShowError()).toBeTruthy();
  });
  it('should hide error', () => {
    component?.field?.setErrors({ anyError: true });
    component.error = 'anyError';

    expect(component.shouldShowError()).toBeFalsy();
  });
  it('should hide error when field is touched but no errors', () => {
    component?.field?.markAsTouched();

    component.error = '';

    expect(component.shouldShowError()).toBeFalsy();
  });

  it('should show different error', () => {
    formGroup.addControl('anyField', new FormControl());

    component?.field?.markAsTouched();
    component?.field?.setErrors({ anyError: true });
    component.error = 'anotherError';

    expect(component.shouldShowError()).toBeFalsy();
  });





});
