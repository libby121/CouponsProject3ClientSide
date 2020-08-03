import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Customer } from 'src/app/models/customer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
 import { UpdateCustomerComponent } from '../update-customer/update-customer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {

  customers:Customer[];
  customerId:number;
   dtOptions: DataTables.Settings = {};
  constructor(private service:AdminService, 
    private router:Router,private snack:MatSnackBar, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.service.getAllCustomer().subscribe( (all)=>{
      this.customers=all;
 
    },(err)=>{
      if(err.status===401){
        sessionStorage.removeItem('token');
         this.router.navigate(["login"])
         
          }else alert(err.error)
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      processing: true,
     "columnDefs": [ {
      "targets": [0,6,7,4],
      "orderable": false,
     
    },
     {
      "targets": [5,6 ],
      "type":"num-fmt"
    },
   ]
     
     
     
  }
  }
  edit(id:number){
    this.customerId=id;

let ref=this.dialog.open(UpdateCustomerComponent,{data:{id:this.customerId}});
ref.componentInstance.CustomerId=this.customerId;
  this.service.getOneCustomer(this.customerId).subscribe( (newC)=>{
  ref.componentInstance.email?.setValue(newC.email);
  ref.componentInstance.name?.setValue(newC.firstName);
  ref.componentInstance.last?.setValue(newC.lastName);
  ref.componentInstance.password?.setValue(newC.password);
      }, (err)=>{
        if(err.status===401){
          sessionStorage.removeItem('token');
           this.router.navigate(["login"])
         
            }else alert(err.error)
      })


  }
  delete(id:number){
    this.customerId=id;
     this.service.deleteCustomer(id).subscribe( (msg)=>{
      let index=this.customers.findIndex(x=>x.id==id);
      this.customers.splice(this.customers.indexOf(this.customers[index]),1);
 
      
       
       
       
       

 


       }

    ,(err)=>{
      if(err.status===401){
        sessionStorage.removeItem('token');
         this.router.navigate(["login"])
         
          }else alert(err.error)}
    )}
  

  byId(){
   if(this.customerId==null)return;
    this.service.getOneCustomer(this?.customerId).subscribe((customer)=>{
      
       this.customers=[];
      this.customers[0]=customer;
     
     
     
      
      },(err)=>{
        if(this?.customerId==null)console.log("null")
       else if(err.status===401){
          sessionStorage.removeItem('token');
           this.router.navigate(["login"])
          //  alert(err.error);}
            }
            else alert(err.error)
     })
  }
  showAll(){
   this.customers=[];
   this.service.getAllCustomer().subscribe( (all)=>{
     this.customers=all;
   },(err)=>{
    if(err.status===401){
      sessionStorage.removeItem('token');
       this.router.navigate(["login"])
      //  alert(err.error);}
        }else alert(err.error)
   })
  }

}
