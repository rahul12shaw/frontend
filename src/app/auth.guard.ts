import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let _router=inject(Router);
   let issloggedId=localStorage.getItem('isloggedIn',);
  
     localStorage.setItem("isloggedIn","false");
     
  if(issloggedId=='false'){
    alert("Not valid user")
    _router.navigate(['login']);
    return false;
  }
  return true;
  _router.navigate(['course']);
};
