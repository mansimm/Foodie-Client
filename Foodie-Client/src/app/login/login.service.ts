import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginService(loginForm:any): Observable<any>
  {
    console.log("in login service : "+loginForm.value);
    let url = "http://localhost:4000/foodie/userAPI/login";
    return  this.http.post<any>(url,loginForm);
  }
}
