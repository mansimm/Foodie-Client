import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  errorMessage : String;
  successMessage : String;

  constructor(private fb : FormBuilder, private service:LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      //role : ['',[Validators.required]],
      contactNumber : ['',[Validators.required, Validators.pattern("[6789][0-9]{9}")]],
      password : ['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{7,20}")]]
    });
  }

  login()
  {
    this.errorMessage = null;
    this.successMessage = null;

    this.service.loginService(this.loginForm.value).subscribe(
      success => {this.successMessage = success.message;
      console.log(success.message);
      },
      error =>{ this.errorMessage = error.error.errorMessage;
        console.log(error.error.errorMessage);
      }

    )
  }
}
