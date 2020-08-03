import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-bar',
  templateUrl: './admin-bar.component.html',
  styleUrls: ['./admin-bar.component.css']
})
export class AdminBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navAddCom(){
    this.router.navigate(["admin/addCompany"])
     }
     navAddCust(){
       this.router.navigate(["admin/addCustomer"])
     }
     navAllCom(){this.router.navigate(["admin/allCompanies"])};
     navAllCust(){
       this.router.navigate(["admin/allCustomers"])
     }
   
   
   
   
   
   
   
    
    
    
    
    
    
    
    navallCoup(){
      this.router.navigate(["all/coupons"])
    }
    navFile(){this.router.navigate(["admin/deletion-file"])}
     }



