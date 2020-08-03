import { Customer } from './customer';
import { Coupon } from './coupon';

export class ShoppingCart{

    public coupons:Coupon[];
    constructor(public id:string,public customer:Customer){}
}