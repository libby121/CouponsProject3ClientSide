import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
 import { CompanyService } from 'src/app/services/company.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Coupon } from 'src/app/models/coupon';
import { UpdateCouponComponent } from '../update-coupon/update-coupon.component';
import { Category } from 'src/app/models/category.enum';

@Component({
  selector: 'app-category-price',
  templateUrl: './category-price.component.html',
  styleUrls: ['./category-price.component.css']
})
export class CategoryPriceComponent implements OnInit {
  @ViewChild('priceInput') el:ElementRef;
  @ViewChild('priceMsg') el2:ElementRef;

  coupons ;
  isChosen;
  price;
  category;
  toggleNum;
  eli;
  dateTime;
  companyName;
  lastUpdate:Date;
  couponId;
  categories;
   constructor(private service:CompanyService, private snack:MatSnackBar,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    this.categories=Object.keys(Category);
    this.eli=this.el?.nativeElement?.value;
  this.dateTime=new Date();
   this.service.getDetails().subscribe((company)=>{
this.companyName=company.name;
this.lastUpdate=company.lastUpdate;
console.log(company.lastUpdate)

  },(err)=>{
    console.log(err.message);
  })
  }

  getByCategory(cat:any){
 this.service.getCouponsByCateory(cat).subscribe( (byCat)=>{
 
   console.log(cat);

this.coupons=byCat;
if(this.coupons.length!=0){
this.isChosen=true;
 }
else this.isChosen=false;
 
}, (err)=>{
  alert(err.error)
})
  }
   edit(id:number){
     this.couponId=id;
     let ref=this.dialog.open(UpdateCouponComponent,{data:{id:this.couponId}});
    
     ref.componentInstance.CoupId=this.couponId;
     this.service.getOne(this.couponId).subscribe( (newC)=>{
     ref.componentInstance.title?.setValue(newC.title);
     ref.componentInstance.category?.setValue(newC.category);
     ref.componentInstance.description?.setValue(newC.description);
     ref.componentInstance.amount?.setValue(newC.amount);
     ref.componentInstance.price?.setValue(newC.price);
     ref.componentInstance.image?.setValue(newC.image);
     ref.componentInstance.start?.setValue(newC.startDate);
     ref.componentInstance.end?.setValue(newC.endDate);
     
     },(err)=>{}
   );}
  delete(coupid:number){
this.service.deleteCoupon(coupid).subscribe ( (msg)=>{
 let snackRef= this.snack.open("coupon "+coupid+" was successfully deleted","ok,sure",{duration:6000})


 snackRef.afterDismissed().subscribe( ()=>{
  location.reload()});


  })




  };
  byPrice(){
     this.service.getCouponsByPrice(this.price).subscribe((coups)=>{
       this.category=null;
 

      if(coups.length>0){this.isChosen=true;this.toggleNum=true;   
        this.coupons=coups;
          
       }
      else this.isChosen=false;

    }, (err)=>{}
      //alert(err.error)
    )
  }
  // getCompanyName
}
