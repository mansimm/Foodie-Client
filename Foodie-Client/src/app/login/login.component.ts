import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  errorMessage : String;
  successMessage : String;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      role : ['',[Validators.required]],
      uname : ['',[Validators.required]],
      password : ['',[Validators.required]]
    });
  }

  login()
  {
    alert("Login method called");
  }
}
