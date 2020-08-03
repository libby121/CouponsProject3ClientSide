import { Category } from './category.enum';
import { Company } from './company';
import { Customer } from './customer';

 
export class Coupon {
    public isSalePrice:boolean;
    public customers:Customer[];
 
 constructor(
    public id :number,
    public category:Category,
  
    public title:string,
    public description:string,
    public startDate:Date,
     public endDate:Date,
    public amount:number,
    public price:number,
     public image:string,
     public company?:Company
   
   
    






){}

}
