import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { EventEmitter, Output } from '@angular/core'
import { SessionInfo } from '../model/sessionInfo'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: String;
  successMessage: String;

  loggedin: boolean = false;
  @Output()
  customevent: EventEmitter<Boolean> = new EventEmitter<Boolean>();
   emitevent(){
     console.log("emitevent is called -----");
     this.customevent.emit(this.loggedin);    
   }

  constructor(private fb: FormBuilder, private service: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      //role : ['',[Validators.required]],
      contactNumber: ['', [Validators.required, Validators.pattern("[6789][0-9]{9}")]],
      password: ['', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{7,20}")]]
    });
  }

  login() {
    this.errorMessage = null;
    this.successMessage = null;

    this.service.loginService(this.loginForm.value).subscribe(
      success => {
        this.successMessage = success.message;
        console.log(success.message);
        this.loggedin = true;
        console.log("login===="+this.loggedin);
        this.emitevent();
        SessionInfo.contactNumber = this.loginForm.get('contactNumber').value;
        SessionInfo.isLoggedIn = true;
        sessionStorage.setItem('contactNumber', this.loginForm.get('contactNumber').value);
        sessionStorage.setItem('isLoggedIn', 'true');
      },
      error => {
        this.errorMessage = error.error.errorMessage;
        console.log(error.error.errorMessage);
        this.loggedin = false;
        this.emitevent();
        SessionInfo.isLoggedIn = false;
      }

    )
  }
}
