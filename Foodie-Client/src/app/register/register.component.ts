import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RegisterService } from './register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage: String;
  successMessage: String;

  constructor(private fb: FormBuilder, private service: RegisterService) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("[A-Z][a-z]*( [A-Z][a-z]*)*")]],
      emailId: ['', [Validators.required, Validators.pattern("[A-Za-z0-9]+@[A-Za-z]+.(com|in)")]],
      contactNumber: ['', [Validators.required, Validators.pattern("[6789][0-9]{9}")]],
      userName: ['', [Validators.required, Validators.pattern("[A-Za-z]{5,12}")]],
      password: ['', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{7,20}")]],
      //address: ['', [Validators.required, Validators.pattern("[A-Za-z0-9,/]*( [A-Za-z0-9,/]+)*")]],
      //test below on browser-pending below to pass roles as array
      //role : ['', [Validators.required, Validators.pattern("(CUSTOMER|VENDOR)")]]
      role:['', [Validators.required, Validators.pattern("(CUSTOMER|VENDOR)")]]
      
    });
    
    //this.registerForm.setValue({"roles":Array.of(this.registerForm.get('role').value)});
    ///console.log("in ngint : "+this.registerForm.value);
  }

  register() {

    this.errorMessage = null;
    this.successMessage = null;
    console.log(this.registerForm.value);
    
    this.service.registerService(this.registerForm.value).subscribe(
      success => this.successMessage = success.message,
      error => this.errorMessage = error.error.errorMessage
      
    );

  }
}
