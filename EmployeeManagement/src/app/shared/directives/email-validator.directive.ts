import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

// @Directive({
//   selector: '[appEmailValidator]'
// })
// export class EmailValidatorDirective {

//   constructor() { }

// }

export function EmailValidator(regExp: RegExp): ValidatorFn {

  let fun = (control: AbstractControl): { [key: string]: any | null } => {

    if (control.value != undefined && isNaN(control.value)) {
      const validEmail = !regExp.test(control.value)
      return validEmail ? { "Email": { value: control.value } } : null;
    }
    return null;
  }

  return fun;
}