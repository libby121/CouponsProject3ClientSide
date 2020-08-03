import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute } from '@angular/router';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-coupon-preview',
  templateUrl: './coupon-preview.component.html',
  styleUrls: ['./coupon-preview.component.css']
})
export class CouponPreviewComponent implements OnInit {
  id: number;
  coupon: Coupon;
  file: File;
  imageSrc: boolean;
  
  constructor(private service: CompanyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params["id"];
    this.service.getOne(this.id).subscribe((coupon)=>{
      this.coupon = coupon;
      if(coupon.image==null)  document.getElementById('myimg').setAttribute('src', "assets/images/box.jpg");
     else   this.service.fetchImage(this.id).subscribe((image) => {
      var reader = new FileReader();
     
      reader.readAsDataURL(image);
      var textBase64 = '';
      reader.onload = function () {
        var base64String = reader.result;
        // console.log('Base64 String - ', base64String);
        textBase64 = base64String + '';
        document.getElementById('myimg').setAttribute('src', textBase64);
        // console.log('test  ' + image)
       
    },(err)=>{
      alert(err.error)
    }})              
 });

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   



   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

      
                

    
    
    
    
    
    
    

    
    

    


    


    
  }}


