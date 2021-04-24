import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage: String;
  successMessage: String;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("[A-Z][a-z]*( [A-Z][a-z]*)*")]],
      email: ['', [Validators.required, Validators.pattern("[A-Za-z0-9]+@[A-Za-z]+.(com|in)")]],
      contactNumber: ['', [Validators.required, Validators.pattern("[6789][0-9]{9}")]],
      password: ['', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{7,20}")]],
      address: ['', [Validators.required, Validators.pattern("[A-Za-z0-9,/]*( [A-Za-z0-9,/]+)*")]],
      role: ['', [Validators.required, Validators.pattern("(customer|vendor)")]]
    });
  }

  register() {

  }
}
