import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component'


const routes: Routes = [
  { path:"app-login",component: LoginComponent},
  { path:'',redirectTo:'/app-homepage', pathMatch: 'full' },//not working
  { path: '**', component:  HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
