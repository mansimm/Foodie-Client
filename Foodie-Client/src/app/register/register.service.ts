import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { }

  registerService(registerForm : any):Observable<any>
  {
    let url = "http://localhost:4000/foodie/userAPI/userRegister";
    console.log("In service ="+registerForm.value);
    return this.http.post(url,registerForm);
  }
}
