import { Component, OnInit } from '@angular/core';
import { UserAddress } from '../shared/models/UserAddress'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username : String;

  review : boolean = false;
  photos : boolean = false;
  bookmarks : boolean = false;
  
  orderhistory : boolean = false;
  address : boolean = false;
  favouritorder : boolean = false;

  subscription : boolean = false;

  credits : boolean = false;
  cards : boolean = false;
  wallets : boolean = false;

  userAddresses : UserAddress[] = [
    {userAddressId:"1", userAddressName:"Home-1", area:"xyx",city:"abs",pincode:"123456",userState:"state",addressLine1:"line1",addressLine2:"addressLine2"},
    {userAddressId:"2", userAddressName:"Home-2", area:"xyx",city:"abs",pincode:"123456",userState:"state",addressLine1:"line1",addressLine2:"addressLine2"},
    {userAddressId:"1", userAddressName:"Home-3", area:"xyx",city:"abs",pincode:"123456",userState:"state",addressLine1:"line1",addressLine2:"addressLine2"},
    {userAddressId:"1", userAddressName:"Home-4", area:"xyx",city:"abs",pincode:"123456",userState:"state",addressLine1:"line1",addressLine2:"addressLine2"}
  ];

  constructor() { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('isLoggedIn');
  }
  mouseEnter(row:String)
  {
    this.review = false;
    this.photos=false;
    this.bookmarks=false;

    this.orderhistory = false;
    this.address = false;
    this.favouritorder = false;
  
    this.subscription  = false;
  
    this.credits = false;
    this.cards  = false;
    this.wallets = false;

    if(row=="review")
    {
      this.review=true;
    }
    else if(row=="photos")
    {
      this.photos=true;
    }
    else if(row=="bookmarks")
    {
      this.bookmarks=true;
    }
    else if(row=="orderhistory")
    {
      this.orderhistory = true;
    }
    else if(row=="address")
    {
      this.address = true;
    }
    else if(row=="favouritorder")
    {
      this.favouritorder = true;
    }
    else if(row=="subscription")
    {
      this.subscription = true;
    }
    else if(row=="credits")
    {
      this.credits = true;
    }
    else if(row=="cards")
    {
      this.cards = true;
    }
    else if(row=="wallets")
    {
      this.wallets = true;
    }
  }
}
