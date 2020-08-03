import { Component, OnInit, Input } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-coupon-view',
  templateUrl: './coupon-view.component.html',
  styleUrls: ['./coupon-view.component.css']
})
export class CouponViewComponent implements OnInit {
 
  id:number;
   coupon:Coupon;
   isImage:boolean;
  constructor(private route:ActivatedRoute,private service:CustomerService) { }

  ngOnInit(): void {
    this.id=+this.route.snapshot.params["id"];
    this.service.getOneCoupon(this.id).subscribe((coup)=>{
     this.coupon=coup;

     console.log(this.id)
     if(this.coupon.image==null)document.getElementById('myimg').setAttribute('src', "assets/images/box.jpg");
     else { 
     this.service.fetchImage(this.id).subscribe((image) => {
     
     var reader = new FileReader();
      reader.readAsDataURL(image);
      var textBase64 = '';
      
      reader.onloadend = function () {
        var base64String = reader.result;
        // console.log('Base64 String - ', base64String);
        textBase64 = base64String + '';
      
        document.getElementById('myimg').setAttribute('src', textBase64);
       
        // console.log('test  ' + image)
       
    


    } })}
  },(err)=>{
      alert(err.message)
    })
   }

}
