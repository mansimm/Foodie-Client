import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { NavService } from '../nav/nav.service'// '../nav.service';
import { EventEmitter, Output } from '@angular/core'
import { SessionInfo } from '../model/sessionInfo'
import { User } from '../shared/models/User';
import { Customer } from '../shared/models/Customer';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;//added
  tryToLogin:boolean = false;//added
  loginForm: FormGroup;
  errorMessage: String;
  successMessage: String;

  isLoggedIn: boolean = false;
  @Output()
  customevent: EventEmitter<Boolean> = new EventEmitter<Boolean>();
   emitevent(){
     console.log("emitevent is called -----");
     this.customevent.emit(this.isLoggedIn);    
   }

  constructor(private fb: FormBuilder, private service: LoginService,private router:Router,
    private navbarService: NavService) { 
      this.navbarService.getLoginStatus().subscribe((status:boolean) => this.isLoggedIn = status);
    }

  ngOnInit(): void {
    this.user = new User();
    this.loginForm = this.fb.group({
      role : ['',[Validators.required]],//uncommented
      contactNumber: ['', [Validators.required, Validators.pattern("[6789][0-9]{9}")]],
      password: ['', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{7,20}")]]
    });
  }

  login() {
    this.tryToLogin = true;//added
    this.user = this.loginForm.value as User;
    this.errorMessage = null;
    this.successMessage = null;

    this.service.loginService(this.loginForm.value).subscribe(
      success => {
        this.navbarService.updateLoginStatus(true);
        this.user = success;//added
        sessionStorage.setItem("user",JSON.stringify(this.user));//added
        sessionStorage.setItem("isLoggedin",JSON.stringify(true));
        //sessionStorage.setItem("userType",JSON.stringify("Customer"));
        this.tryToLogin=false;
        this.router.navigate(['/homepage']);
        console.log("User is :"+JSON.stringify(this.user));

        this.successMessage = success.message;
        console.log(success.message);
        this.isLoggedIn = true;
        console.log("login===="+this.isLoggedIn);
        this.emitevent();
        SessionInfo.contactNumber = this.loginForm.get('contactNumber').value;
        SessionInfo.isLoggedIn = true;
        sessionStorage.setItem('contactNumber', this.loginForm.get('contactNumber').value);
        sessionStorage.setItem('isLoggedIn', 'true');
      },
      error => {
        this.navbarService.updateLoginStatus(false);
        sessionStorage.setItem("isLoggedin",JSON.stringify(false));//added
        this.errorMessage = error.error.errorMessage;
        console.log(error.error.errorMessage);
        this.isLoggedIn = false;
        this.emitevent();
        SessionInfo.isLoggedIn = false;
      }

    )
  }

  
}
