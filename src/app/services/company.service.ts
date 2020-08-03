import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coupon } from '../models/coupon';
import { Category } from '../models/category.enum';
import { Company } from '../models/company';
 
 
 
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

 
  constructor(private httpService: HttpClient) { }

  headers = new HttpHeaders({
    "Content-Type": undefined,

    'Authorization': 'any ',
    'Accept': 'any'
      
  });


  baseUrl = "http://localhost:8080/company";//when using : i get an error

  headerDict = {

    'Content-Type': 'Blob',
    // 'Access-Control-Allow-Headers': 'Content-Type'
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',


  }


  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
    responseType: 'text',

  };


 
 
 
 
 

 


  uploadImage(file: FormData) {


    return this.httpService.post(this.baseUrl + "/upload/" + sessionStorage.token, file, { responseType: 'text' }
      // {headers:new HttpHeaders(this.headerDict)})
    )
  };


  // getCouponImage(id: number) {
    // return this.httpService.get(this.baseUrl + "/getImage/" + sessionStorage.token + "/" + id,
      // { responseType: 'text' }
    // );
  // }

  addCoupon(coupon: Coupon) {
    return this.httpService.post<Coupon>(this.baseUrl + "/add/" + sessionStorage.token, coupon);
  }
    
   
  updateCoupon(coupon: Coupon) {
    return this.httpService.put<Coupon>(this.baseUrl + "/update/" + sessionStorage.token, coupon);
  }
  deleteCoupon(couponId: number) {
    return this.httpService.delete(this.baseUrl + "/delete/" + sessionStorage.token+ "/" + couponId 
      , { responseType: "text" });
  }
  getAllCoupons() {
     
     return this.httpService.get<Coupon[]>(this.baseUrl +"/allCoupons/"+ sessionStorage.getItem("token") );
  }
  getCouponsByCateory(category: Category) {
    return this.httpService.get<Coupon[]>(this.baseUrl + "/category/" + sessionStorage.token+ "/" +category  )
  }
  getCouponsByPrice(price: number) {
    return this.httpService.get<Coupon[]>(this.baseUrl + "/price/"   + sessionStorage.token+ "/"+ price);
  }
  getDetails() {
    return this.httpService.get<Company>(this.baseUrl + "/" + sessionStorage.token);
  }
  getOne(coupId: number) {
    return this.httpService.get<Coupon>(this.baseUrl + "/one/" + sessionStorage.token+ "/" + coupId );
  }


fetchImage(coupId:number){
  return this.httpService.get(this.baseUrl + "/getImage/" + sessionStorage.token+"/"+coupId, {responseType:'blob'});
}



}
