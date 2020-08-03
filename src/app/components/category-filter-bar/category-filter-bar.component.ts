import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { Category } from 'src/app/models/category.enum';
 
@Component({
  selector: 'category-filter-bar',
  templateUrl: './category-filter-bar.component.html',
  styleUrls: ['./category-filter-bar.component.css']
})
export class CategoryFilterBarComponent implements OnInit {

  category;;
   @Input() coupons:Coupon[];
   @Output() data=new EventEmitter<Coupon[]>();
   @Output() all=new EventEmitter<boolean>();
  categories=Object.values(Category).filter(v=> typeof v=== 'string');
   constructor() { }

   filterByCategory(cat){
  
this.category=cat;
console.log(cat);
 const newC=this.coupons.filter(coup=>coup.category===cat);
 this.data.emit(cat);
 
      
   }
   showAll(){
    this.category= !this.category;
this.all.emit(true);

   }
  ngOnInit(): void {
  
  }
  
  
  
  

}
