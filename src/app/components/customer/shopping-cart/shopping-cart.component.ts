import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ShoppingCart } from 'src/app/models/ShoppingCart';
import { Coupon } from 'src/app/models/coupon';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseApproveComponent } from '../purchase-approve/purchase-approve.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private service:CustomerService,private dialog:MatDialog, private router:Router
    ,private snack:MatSnackBar ) { }
 CartCoupons:Coupon[] ;
 coupId:number;
 imageSrcs:string[]=[];
  
  ngOnInit(): void {
    this.service.getOrCreateCustomerCart().subscribe((cart)=>{
       this. CartCoupons=cart.coupons;

      for(let i=0;i<this.CartCoupons?.length;i++){
        if(this.CartCoupons[i].image==null){ 
          this.imageSrcs[this.CartCoupons[i]?.id]="assets/images/box.jpg" ;console.log( this.imageSrcs[this.CartCoupons[i]?.id])}

        else{ this.service.fetchImage(this.CartCoupons[i]?.id).subscribe((image)=>{
          var reader = new FileReader();
          reader.readAsDataURL(image);
          var textBase64 = '';
          reader.onloadend=()=> {
            var base64String = reader.result;
           
            textBase64 = base64String + '';
            
            this.imageSrcs[this.CartCoupons[i]?.id]=textBase64;
           
           
           
            
          }})}
            
        
        }
    // 
    },(err)=>{
      
   if(err.status===401){
      sessionStorage.removeItem('token');
       this.router.navigate(["login"])
      
        }else alert(err.error)
        })};

        remove(coupId:number){
           
          this.service.removeFromCart(coupId).subscribe(()=>{
         
            let index=this.CartCoupons.findIndex(x=>x.id==coupId);
            this.CartCoupons.splice(this.CartCoupons.indexOf(this.CartCoupons[index]),1);
          
          
             
          },(err)=>{
            if(err.status===401){
              sessionStorage.removeItem('token');
               this.router.navigate(["login"])
              
                }else alert(err.error)
                })};
           
          




        
        buy(coupId:number){
           this.service.purchaseCoupon(coupId).subscribe(()=>{
               let ref=this.dialog.open(PurchaseApproveComponent,{data:{coup:coupId}});
              ref.componentInstance.coup=coupId;
               ref.afterClosed().subscribe(()=>{
                let index=this.CartCoupons.findIndex(x=>x.id==coupId);
 this.CartCoupons.splice(this.CartCoupons.indexOf(this.CartCoupons[index]),1);
               }) 
           },(err)=>{
            if(err.status===401){
              sessionStorage.removeItem('token');
               this.router.navigate(["login"])
              
                }else alert(err.error)
                })};
           
      
        removeAll(){
          this.service.deleteCart().subscribe((text)=>{
        
           
 this.CartCoupons=[]          
            
          },(err)=>{
            if(err.status===401){
              sessionStorage.removeItem('token');
               this.router.navigate(["login"])
              
                }else alert(err.error)
          })
        }

    
 








   
   
   
   
   
   
  }

