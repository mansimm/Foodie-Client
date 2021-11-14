import { Component, Input, OnInit } from '@angular/core';
import { NavService } from './nav.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //@Input()
  //login;
  isLoggedIn=false;

  constructor(private navbarService: NavService) { 
    this.navbarService.getLoginStatus().subscribe((status:boolean) => this.isLoggedIn = status);
  }

  ngOnInit(): void {
    let myItem = sessionStorage.getItem('isLoggedIn');
    console.log("sessionStorage in nav login=>"+myItem);
    //console.log("nav login="+this.login);
    //this.login = !myItem;
    this.isLoggedIn= (myItem=="true");//added
  }

  logout()
  {
    this.navbarService.updateLoginStatus(false);
    sessionStorage.setItem("user",null);
    console.log("Logout called...");
  }
}
