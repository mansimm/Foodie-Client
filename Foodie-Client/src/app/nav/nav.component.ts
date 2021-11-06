import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input()
  login;

  constructor() { }

  ngOnInit(): void {
    let myItem = sessionStorage.getItem('isLoggedIn');
    console.log("sessionStorage in nav login=>"+myItem);
    console.log("nav login="+this.login);
    this.login = !myItem;
  }

}
