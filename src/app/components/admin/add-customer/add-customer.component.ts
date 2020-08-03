import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Customer } from 'src/app/models/customer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, private service:AdminService,
    private router:Router, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      first:["",[Validators.required]],
      lastName:[""],
      email:["",[Validators.required, Validators.email]],
      password:["",[ Validators.required,Validators.pattern
        ('^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$')]]
    })
     
  }

  addCust(){
    let customer=new Customer(0,this.first.value,this.last.value,this.email.value,this.password.value);
    
    this.service.addCustomer(customer).subscribe( (newC)=>{
    
     this.snack.open("customer "+newC.firstName +" was added successfully!","ok,cool",{duration:5000});
     
     
     
      },(err)=>{
        if(err.status===401){
          sessionStorage.removeItem('token');
           this.router.navigate(["login"])
          //  alert(err.error);}
            }else alert(err.error)
      

    })
  };

  get first(){
    return this.form.get("first");
  }
  get last(){
    return this.form.get("lastName");
  }
  get email(){
    return this.form.get("email");
  }
  get password(){
    return this.form.get("password");
  }
}
