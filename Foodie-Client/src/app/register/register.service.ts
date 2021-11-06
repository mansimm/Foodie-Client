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
    let url = "http://localhost:4000/foodie/userAPI/register";
    return this.http.post(url,registerForm);
  }
}
