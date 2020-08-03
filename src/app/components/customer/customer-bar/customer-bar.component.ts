import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'customer-bar',
  templateUrl: './customer-bar.component.html',
  styleUrls: ['./customer-bar.component.css']
})
export class CustomerBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navAll(){ this.router.navigate(["customer/allPurchases"])};
  navToPurchase(){ this.router.navigate(["cupons/allView"])};
  navCart(){this.router.navigate(["customer/cart"])}

}


