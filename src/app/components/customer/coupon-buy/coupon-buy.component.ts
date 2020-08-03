import { Component, OnInit, Input, Output } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CustomerService } from 'src/app/services/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseApproveComponent } from '../purchase-approve/purchase-approve.component';
import { MatSnackBar } from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-coupon-buy',
  templateUrl: './coupon-buy.component.html',
  styleUrls: ['./coupon-buy.component.css']
})
export class CouponBuyComponent implements OnInit {

  @Input()
coupon:Coupon;
 imageUrls:string[]=[];
// textBase64:string;
  constructor(private service:CustomerService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    if(this.coupon.image==null){
      this.imageUrls[this?.coupon?.id]="assets/images/box.jpg"; 
    console.log("fine")
    }else{
    this.service.fetchImage(this.coupon?.id).subscribe((image) => {
      
   
   
   
   
       
      
      var reader = new FileReader();
      reader.readAsDataURL(image);
      var textBase64 = '';
      reader.onloadend = () =>{
       
        var base64String = reader.result;
      //   console.log('Base64 String - ', base64String);
        textBase64 = base64String + '';
        this.imageUrls[this?.coupon?.id]=textBase64; 
        // document.getElementById('myimg')?.setAttribute('src', textBase64);
       // document.getElementById('myimg')?.setAttribute('src', textBase64);

         
     }
    })}
  }
  addToCart(){
    
console.log(this.coupon.id)
 this.service.addToCart(this.coupon.id).subscribe(()=>{
  console.log(this.coupon.id)

  this.snack.open("The coupon was added to your cart","awesome!",{duration:6000
})
 

  },(err)=>{
    console.log(err.error)
    this.snack.open(err.error,"ok,got ya!",{duration:5000})
})
  }
}
  