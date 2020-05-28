import { FormGroup } from '@angular/forms';

export class CustomValidator {
    static passwordValidator(formCtrlOne, formCtrlTwo) {
        return (fg: FormGroup) => {
            const fieldOne = fg.controls[formCtrlOne];
            const fieldTwo = fg.controls[formCtrlTwo];
            if (fieldOne && fieldTwo) {
                if(fieldOne.value || fieldTwo.value) {
                    if (fieldOne.value !== fieldTwo.value) {
                        fieldOne.setErrors({...fieldOne.errors, ...{ 'password_mismatch': true }});
                        fieldTwo.setErrors({...fieldTwo.errors, ...{ 'password_mismatch': true }});
                    } else {
                        fieldOne.setErrors({...fieldOne.errors, ...{ 'password_mismatch': false }});
                        fieldTwo.setErrors({...fieldTwo.errors, ...{ 'password_mismatch': false }});
                    }
                }
            }
        }
    }
}