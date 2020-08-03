import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Coupon } from 'src/app/models/coupon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-coupons',
  templateUrl: './cust-coupons.component.html',
  styleUrls: ['./cust-coupons.component.css']
})
export class CustCouponsComponent implements OnInit {
coupons:Coupon[];
customerName;
dtOptions: DataTables.Settings = {};
 
  constructor(private service:CustomerService,private router:Router,
    ) { }  
  
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      processing: true,
     "columnDefs": [ {
      "targets": [ 0,3,4,5,6 ],
      "orderable": false,
     
    },
     {
      "targets": [],
      "type":"num-fmt"
    },{
      "targets": [],
      "type":"date"
    }]};
   this.service.getCustomerCoupons().subscribe((Allcoupons)=>{
this.coupons=Allcoupons;
this.getCustomerDetails();
    },(err)=>{
      if(err.status===401){
        sessionStorage.removeItem('token');
         this.router.navigate(["login"])
        
          }else alert(err.error)
          })};
   
  

  getCustomerDetails(){
    this.service.getCustomerDetails().subscribe((cust)=>{
      this.customerName=cust.firstName;

    },(err)=>{
      if(err.status===401){
        sessionStorage.removeItem('token');
         this.router.navigate(["login"])
        
          }else alert(err.error)
          })};
     
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
 

