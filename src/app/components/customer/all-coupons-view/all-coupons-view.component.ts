import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.enum';

@Component({
  selector: 'app-all-coupons-view',
  templateUrl: './all-coupons-view.component.html',
  styleUrls: ['./all-coupons-view.component.css']
})
export class AllCouponsViewComponent implements OnInit {
  coupons:Coupon[]=[];
  filteredCoupons;
  couponsByCategory;
  isNoContent=false;
  values = Object.values(Category).filter(v => typeof v === 'string');
   constructor(private service:CustomerService,
    private rout:Router,
    private router:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
         
//console.log(this.values);
    this.service.getAllCoupon().subscribe((all)=>{
      this.coupons=all;
       // this.coupons=this.couponsByCategory;
      
    },(err)=>{
      if(err.status===401){
        sessionStorage.removeItem('token');
         this.rout.navigate(["login"])
        
          }else alert(err.error)
          })};
     
     

  
  getFiltered(data:Category){
  
   
   console.log(data);
    this.filteredCoupons=this.coupons.filter(coup=>coup.category===data);
    this.isNoContent= (this.filteredCoupons.length===0)?true:false;
      
 


   }  

   showAll(flag){
    this.service.getAllCoupon().subscribe((all)=>{
      this.filteredCoupons=all;
      this.isNoContent=false;
       
    },(err)=>{
      
      if(err.status===401){
        sessionStorage.removeItem('token');
         this.rout.navigate(["login"])
        
          }else alert(err.error)
          })};
     
     
  
   }
  
  
  
  
  
  
 


