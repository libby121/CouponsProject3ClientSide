import { Coupon } from './coupon';

export class Company {
     public coupons:Coupon[];
    constructor(
        public id:number,
       

        public name:string,
        public email:string,
        public password:string,
        public balance?:number,
        public lastUpdate?:Date
       


    ){}
     
     
     
}
