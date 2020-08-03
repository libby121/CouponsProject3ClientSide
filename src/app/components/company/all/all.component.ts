import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UpdateCouponComponent } from '../update-coupon/update-coupon.component';
import { MatDialog } from '@angular/material/dialog';
 
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  couponId;
  coupons;
  totalCoupons;
  companName;
   
  constructor(private service:CompanyService, private snack:MatSnackBar,
    private dialog:MatDialog,
    private router:Router) { }
    dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.service.getAllCoupons().subscribe( (all)=>{
      
      this.coupons=all;
      this.totalCoupons=all;
    },(err)=>{
     console.log('test 1 status: '+err.status);
      if(err.status===401){
        console.log("error")
        sessionStorage.removeItem('token');
         this.router.navigate(["login"])
        //  alert(err.error);}
          }else alert(err.error)
          
    }); 
    







      
      this.service.getDetails().subscribe( (compa)=>
      {this.companName=compa.name,
      console.log(this.companName) 
    },(err)=>{
      if(err.status===401){
        sessionStorage.removeItem('token');
         this.router.navigate(["login"])
        //  alert(err.error);}
          }else alert(err.error)
          
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      processing: true,
     "columnDefs": [ {
      "targets": [ 0,7,8,9 ],
      "orderable": false,
     
    },
     {
      "targets": [3,4 ],
      "type":"num-fmt"
    },{
      "targets": [6,5 ],
      "type":"date"
    }]
   
   
    
    
    
    
    
    
    
    
    
    
  };}
  // this.service.fetchImage(50).subscribe((image)=>{
    // let reader = new FileReader();
    // reader.readAsDataURL(image);
    // reader.onload = (event) => {
    //  
      // 
    //  },(err)=>{
    //  console.log(err.error);
  //  })
//};

  edit(id:number){
    this.router.navigate(["company/updateCoupon/"+id])
    this.couponId=id;
   // let ref=this.dialog.open(UpdateCouponComponent,{data:{id:this.couponId}});
   
    // ref.componentInstance.CoupId=this.couponId;
    // this.service.getOne(this.couponId).subscribe( (newC)=>{
    // ref.componentInstance.title?.setValue(newC.title);
    // ref.componentInstance.category?.setValue(newC.category);
    // ref.componentInstance.description?.setValue(newC.description);
    // ref.componentInstance.amount?.setValue(newC.amount);
    // ref.componentInstance.price?.setValue(newC.price);
    // ref.componentInstance.image?.setValue(newC.image);
    // ref.componentInstance.start?.setValue(newC.startDate);
    // ref.componentInstance.end?.setValue(newC.endDate);
    // 
    // },(err)=>{}
  // );}
  
  };
 
  delete(coupoId:number){
     
 this.service.deleteCoupon(coupoId).subscribe( (msg)=>{
  let index=this.totalCoupons.findIndex(x=>x.id==coupoId);
  this.totalCoupons.splice(this.totalCoupons.indexOf(this.totalCoupons[index]),1);




  
 },(err)=>{
  if(err.status===401){
    sessionStorage.removeItem('token');
     this.router.navigate(["login"])
    
      }else console.log(err.error+err.status)
      })};
 
  

  byId(){
 if(this.couponId==null)return;
    this.service.getOne(this.couponId).subscribe((coupon)=>{
      
       this.coupons=[];
      this.coupons[0]=coupon;
     
     
     
      
      },(err)=>{
        if(err.status===401){
          sessionStorage.removeItem('token');
           this.router.navigate(["login"])
          //  alert(err.error);}
            }else alert(err.error)
            })};
    
  
  showAll(){
   this.coupons=[];
   this.service.getAllCoupons().subscribe( (all)=>{
     this.coupons=all;
   },(err)=>{
    if(err.status===401){
      sessionStorage.removeItem('token');
       this.router.navigate(["login"])
      
        }else alert(err.error)
        })};
    
      
      }
