import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../models/coupon';
import { Category } from '../models/category.enum';
import { Customer } from '../models/customer';
import { ShoppingCart } from '../models/ShoppingCart';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpService:HttpClient) { }

  cartIds=[];
  baseUrl="http://localhost:8080/customer";
        purchaseCoupon(couponId:number){
    return this.httpService.post<Coupon>(this.baseUrl+"/purchase/"+sessionStorage.token+"/"+couponId,null
);
  }

  cancelOrder(couponId:number){
    return this.httpService.delete(this.baseUrl+"/cancel/"+sessionStorage.token+"/"+couponId,{responseType:"text"});
  }

  getCustomerCoupons(){
    return this.httpService.get<Coupon[]>(this.baseUrl+"/allMyCoupons/"+sessionStorage.token
      )
  }

  getCustomerCouponsByCategory(category:Category){
    return this.httpService.get<Coupon[]>(this.baseUrl+"/category/"+sessionStorage.token+"/"+category);
  }

  getCutomerCouponsByPrice(price:number){
    return this.httpService.get<Coupon[]>(this.baseUrl+"/maxPrice/"+sessionStorage.token+"/"+price);

  }
    getCustomerDetails(){
      return this.httpService.get<Customer>(this.baseUrl+"/"+sessionStorage.token);
    }


    getOneCoupon(coupId:number){
      return this.httpService.get<Coupon>(this.baseUrl+"/oneCoupon/"+sessionStorage.token+"/"+coupId);
    }

    getAllCoupon(){
      return this.httpService.get<Coupon[]>(this.baseUrl+"/all/"+sessionStorage.token);
    }


    getOrCreateCustomerCart(){

      return this.httpService.get<ShoppingCart>(this.baseUrl+"/cart/"+sessionStorage.token);
    }

    addToCart(couponId:number){
      return this.httpService.put(this.baseUrl+"/addToCart/"+sessionStorage.token+"/"+couponId,null, {responseType:'text'});
    }

    removeFromCart(couponId:number){
      return this.httpService.delete(this.baseUrl+"/removeFromCart/"+ sessionStorage.token+"/"+couponId, {responseType:'text'});


          }
 deleteCart(){
             return this.httpService.delete(this.baseUrl+"/deleteCart/"+sessionStorage.token,{responseType:"text"});

 }
 fetchImage(coupId:number){
  return this.httpService.get(this.baseUrl + "/getImage/" + sessionStorage.token+"/"+coupId, {responseType:'blob'});
}


}
