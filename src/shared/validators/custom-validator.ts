import { FormGroup } from '@angular/forms';

export class CustomValidator {
    static passwordValidator(form_ctrl_one, form_ctrl_two) {
        return (fg: FormGroup) => {
            const fieldOne = fg.controls[form_ctrl_one];
            const fieldTwo = fg.controls[form_ctrl_two];
            if (fieldOne && fieldTwo) {
                if(!fieldOne.value) {
                    fieldOne.setErrors({ 'required': true });
                }
                if(!fieldTwo.value) {
                    fieldTwo.setErrors({ 'required': true });
                }
                if(fieldOne.value || fieldTwo.value) {
                    if (fieldOne.value !== fieldTwo.value) {
                        fieldOne.setErrors({ 'password_mismatch': true });
                        fieldTwo.setErrors({ 'password_mismatch': true });
                    } else {
                        fieldOne.setErrors(null);
                        fieldTwo.setErrors(null);
                    }
                }
            }
        }
    }
}