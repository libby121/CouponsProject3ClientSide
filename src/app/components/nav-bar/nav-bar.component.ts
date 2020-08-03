import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

 // isLogged:boolean;
isSession;
  constructor(private router:Router, public service:LoginService) { }

  ngOnInit(): void {
    this.isSession=(sessionStorage.getItem("token")!=null)?true:false;
  }

  goHome(){
    this.router.navigate(["home"])
  }

  loginNav(){
      this.router.navigate(["login"])

  }
  logout(){
this.service.logout().subscribe((msg)=>{
  this.service.isLogged=false;
  console.log(this.service.isLogged);
 sessionStorage.removeItem('token');
  
   this.router.navigate(["login"])
},(err)=>{
  alert(err.message)
})
  }
}
