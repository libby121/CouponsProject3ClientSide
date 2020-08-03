import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Customer } from 'src/app/models/customer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  form: FormGroup;
  CustomerId: number = this.data;
  customer: Customer;

  constructor(private dialogRef: MatDialogRef<UpdateCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number, private snack: MatSnackBar,private router:Router,
    private service: AdminService, private fb: FormBuilder
  ) {
    dialogRef.disableClose = true;
  }
  ngOnInit(): void {
    this.service.getOneCustomer(this.CustomerId).subscribe((cust) => {
      this.customer = cust;
      console.log(this.customer);
    })
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      last: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern
        ('^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$')]]
      ,
    })
  }


  get name() {
    return this.form.get("name");
  }
  get email() {
    return this.form.get("email");
  }
  get password() {
    return this.form.get("password");
  }
  get last() {
    return this.form.get("last");
  }







  editCust() {
    console.log(this.CustomerId);

    this.customer.firstName = this.name.value;
    this.customer.lastName = this.last.value;
    this.customer.email = this.email.value;
    this.customer.password = this.password.value;
    this.customer.revenue = this.customer.revenue;





    this.service.updateCustomer(this.customer).subscribe((newC) => {
     
     
     
     
     location.reload();
    
    
    


    }, (err) => {
      if(err.status===401){
        sessionStorage.removeItem('token');
         this.router.navigate(["login"])
       
          }else alert(err.error)
    })




  }
  close() {
    this.dialogRef.close();
    this.snack.dismiss()
  }
}
