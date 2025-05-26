import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidatorsEmailComponent } from './form-validators-email.component';

describe('FormValidatorsEmailComponent', () => {
  let component: FormValidatorsEmailComponent;
  let fixture: ComponentFixture<FormValidatorsEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormValidatorsEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidatorsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
