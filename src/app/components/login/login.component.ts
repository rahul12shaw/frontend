import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
login(userid,password){
  if(userid=='rahul' && password =='123'){
  localStorage.setItem("isloggedIn","true")
}else{
  localStorage.setItem("isloggedIn","false")
}
}
}
