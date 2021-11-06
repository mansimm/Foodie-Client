import { Component,OnInit } from '@angular/core';
import { SessionInfo } from './model/sessionInfo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Foodie-Client';
  login = false;
  
  
  ngOnInit():void
  {
    sessionStorage.setItem('isLoggedIn', 'false');
    console.log("Session Storage in app => "+ sessionStorage.getItem('isLoggedIn'));
    if(SessionInfo.isLoggedIn)
    {
      this.login = true;
    }
  }

  updateFromLoginChild($event){
    this.login = $event;
    console.log("event in parent is called ===="+this.login);
  }
  
}
