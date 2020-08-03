import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Coupon } from 'src/app/models/coupon';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-approve',
  templateUrl: './purchase-approve.component.html',
  styleUrls: ['./purchase-approve.component.css']
})
export class PurchaseApproveComponent implements OnInit {
coup;
isCancel:boolean;
customerId:number;
  constructor(private router:Router,private dialogRef:MatDialogRef<PurchaseApproveComponent>,
    @Inject(MAT_DIALOG_DATA)public data:Coupon, private service:CustomerService)
     {dialogRef.disableClose=true }

  ngOnInit(): void {
    this.service.getCustomerDetails().subscribe((customer)=>{
    this.customerId=customer?.id;
    },(err)=>{
      if(err.status===401){
        sessionStorage.removeItem('token');
         this.router.navigate(["login"])
        
          }else alert(err.error)
          }); 
    
 this.dialogRef.componentInstance.coup;
   }





  close(){
  //  this.service.addToCart(this.customerId,this.coup.id);
    this.dialogRef.close();
    
    
  }

  cancel(){
this.service.cancelOrder(this.coup).subscribe((msg)=>{
 location.reload();
 
this.isCancel=true;
 },(err)=>{
  alert(err.error);
})
  }

}
