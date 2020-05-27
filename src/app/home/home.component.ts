import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CustomValidator } from 'src/shared/validators/custom-validator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        passsword: [''],
        confirm_passsword: [''],
    }, {validator: CustomValidator.passwordValidator('passsword', 'confirm_passsword')});
  }

  onSubmit() {
    this.submitted = true;
    console.log('Valid?', this.registerForm.valid); // true or false
    console.log('Value', this.registerForm.value);
  }

  get f() { return this.registerForm.controls; }

}
