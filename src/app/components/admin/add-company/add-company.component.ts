import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  form:FormGroup;
  constructor(private service:AdminService, private snack:MatSnackBar,
     private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      name:["",[Validators.required]],
      email:["",[Validators.required, Validators.email
      ]],
      password:["",[ Validators.required,Validators.pattern
        ('^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$')]]
    })
  }
  addCom(){
     
    let company=new Company(0,this.name.value,this.email.value,this.password.value);
   this.service.addCompany(company).subscribe( (newC)=>{

   this.snack.open("company "+newC?.name +" was added successfully!","ok,cool",{duration:5000});
   
   
   
   
   

 }, (err:HttpErrorResponse)=>{
  
  
if(err.status===401){
sessionStorage.removeItem('token');
 this.router.navigate(["login"])
//  alert(err.error);}
  }else alert(err.error)
  })}
  get email(){
    return this.form.get("email");
  }
  get password(){
    return this.form.get("password");
  }

  get name(){
    return this.form.get("name");
  }
}
