import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'company-bar',
  templateUrl: './company-bar.component.html',
  styleUrls: ['./company-bar.component.css']
})
export class CompanyBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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
}
