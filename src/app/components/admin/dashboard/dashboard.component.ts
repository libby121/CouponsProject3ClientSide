import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  numOfCompanies;
  numOfCustomers;
  numOfCoupons;
  constructor(private roter:Router, private service:AdminService) { }

  ngOnInit(): void {
    this.getNumOfCompanies();
    this.getNumOfCustomers();
    this.getNumOfCoupons();

  }
  getNumOfCoupons(){
   this.service.getAllCoupons().subscribe((coups)=>{
     this.numOfCoupons=coups.length;
   })
  }
  navAddCom(){
    this.roter.navigate(["admin/addCompany"])
     }
     navAddCust(){
       this.roter.navigate(["admin/addCustomer"])
     }

     navAllCom(){this.roter.navigate(["admin/allCompanies"])};

     navAllCust(){
       this.roter.navigate(["admin/allCustomers"])
     }

     getNumOfCompanies(){
       this.service.getAllCompanies().subscribe( (compas)=>{
         this.numOfCompanies=compas.length;

       }, (err)=>{
         this.numOfCompanies=null;
       })
     }
     getNumOfCustomers(){
      this.service.getAllCustomer().subscribe( (custos)=>{
        this.numOfCustomers=custos.length;
      }, (err)=>{
        this.numOfCustomers=null;
      })
    }
    navallCoup(){
      this.roter.navigate(["all/coupons"])
    }

    navFile(){this.roter.navigate(["admin/deletion-file"])}
     }

