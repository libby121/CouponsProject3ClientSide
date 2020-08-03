import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router, private service:CompanyService) { }
  companyName;
  coupNum;
  ngOnInit(): void {
    this.getNumberOfCompanyCoups();
    this.getCompanyName();
  }

  navAdd(){
   this.router.navigate(["company/addCoupon"])
  }
  navAll(){
    this.router.navigate(["company/allCoupons"])
  }
  navCat(){
    this.router.navigate(["company/couponsBy"])
  }

  getNumberOfCompanyCoups(){
    this.service.getAllCoupons().subscribe( (all)=>{
this.coupNum=all.length;
     }, (err)=>{
      this.coupNum=null;
    }) 
  }

  getCompanyName(){
    this.service.getDetails().subscribe( (company)=>{
    this.companyName=company.name;
     })
  }
}
