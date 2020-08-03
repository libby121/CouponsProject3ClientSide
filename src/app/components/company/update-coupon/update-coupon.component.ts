import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Category } from 'src/app/models/category.enum';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {
CoupId;
isImage=false;
ImageUrl;
file:File=null;

categories = Object.values(Category).filter(c => typeof c === "string")

form:FormGroup; cat:Category;

  constructor(private fb:FormBuilder,private router:Router, private service:CompanyService,
     private ref:MatDialogRef<UpdateCouponComponent>, private snack:MatSnackBar,
     @Inject(MAT_DIALOG_DATA) public data: number,
    // @Inject(MatSnackBarRef )
      
 ) {     ref.disableClose = true;
  }

  ngOnInit(): void {
    this.form=this.fb.group({
      category:[''],
      title:["",[Validators.required]],
      description:[""],
      start:["",[Validators.required]],
      end:["",[Validators.required]],
      amount:["",[Validators.required]],
      price:["",[Validators.required]],
      image:[""]
    });
    this.service.getDetails().subscribe( (com:Company)=>
    {this.coma=com, console.log(this.coma.id)},(err)=>{alert(err.error)});
  }
get description(){
  return this.form.get("description")
}
get category(){
  return this.form.get("category")
}
get amount(){
  return this.form.get("amount")
}
get price(){
  return this.form.get("price")
}
get image(){
  return this.form.get("image")
}
get title(){
  return this.form.get("title")
}

get start(){
  return this.form.get("start")
}
get end(){
  return this.form.get("end")
}
close(){
  this.ref.close();
}
 coma:Company;
editCoup(){
  console.log("title"+this.title.value);
      let num:number=this.ref.componentInstance.CoupId;
  console.log(this.coma.id);
  let coupi=new Coupon(num,this.category.value,this.title.value,
      this.description.value,this.start.value,this.end.value,this.amount.value,this.price.value,
      this.image?.value
      );   console.log(this.coma.id);

      
   this.service.updateCoupon(coupi).subscribe( (newC)=>{
    
   let snackRef=  this.snack.open("coupon "+coupi.title+" updated successfully"
     ,"ok, great👌",
{duration:6000});
this.close();
snackRef.afterDismissed().subscribe( ()=>{
 
})

},

 

(err)=>{
  // if(err.status===401){
    console.log(err.error)
    //sessionStorage.removeItem('token');
     //this.router.navigate(["login"])
    //  alert(err.error);}
   //   }
      })};
  
       
 


 change(event:any){
  this.cat=event.target.value;
};
selectFile(event:any){
 
 this.file=event.target.files[0];
 console.log(this.file);
 let reader=new FileReader();
 reader.readAsDataURL(this.file);
 reader.onload=(event) => {
  this.ImageUrl=event.target.result;
  this.isImage=true;
 }
  
  
}
}



