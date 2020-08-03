import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/models/category.enum';

@Component({
  selector: 'app-cust-category-price',
  templateUrl: './cust-category-price.component.html',
  styleUrls: ['./cust-category-price.component.css']
})
export class CustCategoryPriceComponent implements OnInit {
  constructor(private service:CustomerService, private snack:MatSnackBar,
     

    private dialog:MatDialog) { }
  @ViewChild('priceInput') el:ElementRef;
  @ViewChild('priceMsg') el2:ElementRef;

  coupons ;
  isChosen;
  price;
  category;
  toggleNum;
  eli;
  dateTime;
  customerName;
   couponId;
   categories=Category;
  
  

  ngOnInit(): void {
    this.eli=this.el?.nativeElement?.value;
  this.dateTime=new Date();
   this.service.getCustomerDetails().subscribe((customer)=>{
this.customerName=customer.firstName;
 console.log(customer.firstName)

  },(err)=>{
    console.log(err.message);
  })
  }

  getByCategory(cat:any){
 this.service.getCustomerCouponsByCategory(cat).subscribe( (byCat)=>{
 
  this.category=cat;
console.log(this.category);
this.coupons=byCat;
if(this.coupons.length!=0){
this.isChosen=true;
 }
else this.isChosen=false;
 
}, (err)=>{
  alert(err.error)
})
  }
  

  // purchase(coupId:number){
    // 
    // this.service.purchaseCoupon(coupId).subscribe((coupon)=>{
      // alert("coupon" +coupon.title+" was purchased!");

    // },(err)=>{
      // alert(err.error)
    // }
  // )}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  delete(coupid:number){
this.service.cancelOrder(coupid).subscribe ( (msg)=>{
 let snackRef= this.snack.open("your order was successfully deleted","ok,sure",{
 duration:6000});

 snackRef.afterDismissed().subscribe( ()=>{
  location.reload()},(err)=>{ let snackRef= this.snack.open("your order was successfully deleted","ok,sure",{
    duration:6000});
   });


  })




  };
  byPrice(){
     this.service.getCutomerCouponsByPrice(this.price).subscribe((coups)=>{
       this.category=null;
 

      if(coups.length>0){this.isChosen=true;this.toggleNum=true;   
        this.coupons=coups;
          
       }
      else this.isChosen=false;

    }, (err)=>{
      alert(err.error)
    }
     )
  }
}
