import { FormGroup } from '@angular/forms';

export class CustomValidator {
    static passwordValidator(formCtrlOne, formCtrlTwo) {
        return (fg: FormGroup) => {
            // Select the two form conrols from the form group on which the comparisin is to be performed.
            const fieldOne = fg.controls[formCtrlOne];
            const fieldTwo = fg.controls[formCtrlTwo];
            if (fieldOne && fieldTwo) {
                if(fieldOne.value || fieldTwo.value) {
                    if (fieldOne.value !== fieldTwo.value) {
                        // Use set error methods like this to append 'password_mismatch' error with the existing errors.
                        fieldOne.setErrors({...fieldOne.errors, ...{ 'password_mismatch': true }});
                        fieldTwo.setErrors({...fieldTwo.errors, ...{ 'password_mismatch': true }});
                    } else {
                        let fieldOneError = {...fieldOne.errors};
                        delete(fieldOneError['password_mismatch']);
                        // If there is no keys in the error object, it means that the contol has no error
                        // In that case set the object as null so that the error marking for the form control works as expected
                        fieldOneError = Object.keys(fieldOneError).length > 0 ? fieldOneError : null; 
                        fieldOne.setErrors(fieldOneError);

                        let fieldTwoError = {...fieldTwo.errors};
                        delete(fieldTwoError['password_mismatch']);
                        // If there is no keys in the error object, it means that the contol has no error
                        // In that case set the object as null so that the error marking for the form control works as expected
                        fieldTwoError = Object.keys(fieldTwoError).length > 0 ? fieldTwoError : null; 
                        fieldTwo.setErrors(fieldTwoError);
                    }
                }
            }
        }
    }
}