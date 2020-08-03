import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-menu',
  templateUrl: './customer-menu.component.html',
  styleUrls: ['./customer-menu.component.css']
})
export class CustomerMenuComponent implements OnInit {

  customerName;
  coupNum;
  constructor(private router:Router,private service:CustomerService) { }

  ngOnInit(): void {
    this.getCustomerName();
    this.service.getCustomerCoupons().subscribe((custCoup)=>{
      this.coupNum=custCoup.length;
    })
    }

  getCustomerName(){
    this.service.getCustomerDetails().subscribe( (customer)=>{
      this.customerName=customer.firstName;
      console.log(customer.id);

    })

  }
  navCart(){this.router.navigate(["customer/cart"])}
  
  
  navAll(){ this.router.navigate(["customer/allPurchases"])};
  navToPurchase(){ this.router.navigate(["cupons/allView"])};
}
