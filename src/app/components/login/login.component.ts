import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup;
clientTypes=["Administrator","Company","Customer"];

  constructor(private service:LoginService, private fb:FormBuilder, private router:Router,
    private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      email:["",[Validators.required]],
      password:["",[Validators.required, Validators.maxLength(20)]],
      client:["",[Validators.required]]
    })
  }


  get email(){
    return this.form.get("email");
  }

  get password(){
    return this.form.get("password");
  }

  get client(){
    return this.form.get("client");
  }

  login(){
this.service.login(this.email.value,this.password.value,this.client.value).subscribe( (ServerToken)=>{
  sessionStorage.token=ServerToken;
 
  this.service.isLogged=true;
  console.log(this.service.isLogged)
    switch(this.client.value){
    case"Administrator":
    this.router.navigate(["admin/dashboard"]);
    break;
    case "Company":this.router.navigate(["company/menu"]);break;
    case "Customer":this.router.navigate(["customer/menu"]);break;
  }
 },(err)=>{

 this.service.isLogged=false;
 console.log(this.service.isLogged);
   this.snack.open(err.error, "will try again", {duration:8000}) })
   }

  //  logOut(){}

   
   
   
}
