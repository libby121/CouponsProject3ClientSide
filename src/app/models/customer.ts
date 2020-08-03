import { Coupon } from './coupon';

export class Customer {
    public isPrime:boolean;
    public revenue:number;
    public coupons:Coupon[];
    constructor(
        public id:number,
        public firstName:string,
        public lastName:string,
        public email:string,
        public password:string,
       
       
       
    ){};
     
     
     
}
