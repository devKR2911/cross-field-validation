import { FormGroup, ValidationErrors } from '@angular/forms';

export class CustomValidator {
    static passwordValidator(formGroup: FormGroup): ValidationErrors | null {
        const password = formGroup.controls.passsword;
        const confirmPassword = formGroup.controls.confirm_passsword;
        if (password && confirmPassword) {
            if (password.value !== confirmPassword.value) {
                password.setErrors({ 'password_mismatch': true });
                confirmPassword.setErrors({ 'password_mismatch': true });
                return { 'password_mismatch': true };
            } else {
                password.setErrors({ 'password_mismatch': null });
                confirmPassword.setErrors({ 'password_mismatch': null });
                return null;
            }
        }
    }
}