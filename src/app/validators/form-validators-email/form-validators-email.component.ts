import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validators-email',
  standalone: false,
  templateUrl: './form-validators-email.component.html',
  styleUrl: './form-validators-email.component.scss'
})
export class FormValidatorsEmailComponent {
  nomeControl = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  })

  emailControl = new FormControl('', {
    validators: [
      Validators.required,
      Validators.email,
    ]
  })
}
