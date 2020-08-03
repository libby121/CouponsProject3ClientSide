import { Component, OnInit, ɵConsole } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
 
import { Inject } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
form:FormGroup;
CompanyId:number=this.data;
company:Company;
  
   constructor(private dialogRef:MatDialogRef<UpdateCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private router:Router,private snack:MatSnackBar,
    private service:AdminService, private fb:FormBuilder
) {     dialogRef.disableClose = true;
}
   ngOnInit(): void {
     console.log(this.CompanyId);

    this.service.getOneCompany(this.CompanyId).subscribe((compan)=>{
      this.company=compan;
    },(err)=>{
      if(err.status===401){
        sessionStorage.removeItem('token');
         this.router.navigate(["login"])
        //  alert(err.error);}
          }else alert(err.error)
    })
    this.form=this.fb.group({
      name:["",[Validators.required]],
      email:["",[Validators.required, Validators.email]],
      password:["",[ Validators.required,Validators.pattern
        ('^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$')]]
    ,
      balance:['']
    }) 
  }
  

  get name(){
    return this.form.get("name");
  }
  get email(){
    return this.form.get("email");
  }
  get password(){
    return this.form.get("password");
  }
  get balance(){
    return this.form.get("balanace");
  }




   
editCom(){
console.log(this.data);

 this.company.name=this.company.name;
this.company.email=this.email.value;
this.company.password=this.password.value;
this.company.balance=this.company.balance;



    this.service.updateCompany(this.company).subscribe( (newC)=>{
 

  
  location.reload();
   },
   (err)=>{
    if(err.status===401){
      sessionStorage.removeItem('token');
       this.router.navigate(["login"])
      //  alert(err.error);}
        }else alert(err.error)
  });
       
 };
 
 close(){
  this.dialogRef.close();
  this.snack.dismiss();    

}
 
  }
 