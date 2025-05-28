import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { RegisterRequest } from '../../models/register/register-request';
import { usernameUniqueValidator, passwordMatchValidator, emailUniqueValidator } from '../../shared/validators/custom-validators';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  submitted = false;

  registerForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.registerForm = new FormGroup(
  {
    username: new FormControl(
      '',
      Validators.required,
      usernameUniqueValidator(this.userService)
    ),
    email: new FormControl(
      '',
      [Validators.required, Validators.email],
      emailUniqueValidator(this.userService)
    ),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required)
  },
  { validators: passwordMatchValidator }
);
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.submitted = true;

      const { username, email, password } = this.registerForm.value as RegisterRequest;

      const newUser: RegisterRequest = { id: crypto.randomUUID(), username, email, password };

      this.userService.register(newUser).subscribe({
        next: () => this.router.navigate(['/login']),
        error: err => {
          console.error('Errore durante la registrazione:', err);
          this.submitted = false;
        }
      });
    }
  }
}
