// custom-validators.ts
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { map, catchError, of } from 'rxjs';
import { UserService } from '../../services/user/user.service';


export function usernameUniqueValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    if (!control.value) {
      return of(null);
    }
    return userService.checkUsername(control.value).pipe(
      map(exists => (exists ? { usernameTaken: true } : null)),
      catchError(() => of(null))
    );
  };
}

export function emailUniqueValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    if (!control.value) {
      return of(null);
    }
    return userService.checkEmail(control.value).pipe(
      map(exists => (exists ? { emailTaken: true } : null)),
      catchError(() => of(null))
    );
  };
}

export function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password === confirm ? null : { passwordMismatch: true };
  }

