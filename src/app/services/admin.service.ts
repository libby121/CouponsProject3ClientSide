import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Customer } from '../models/customer';
import { Coupon } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpService:HttpClient) { }


  baseUrl="http://localhost:8080/admin";

  addCompany(company:Company){
    return this.httpService.post<Company>(this.baseUrl+"/company/add/"+sessionStorage.token,company);
  }


  updateCompany(company:Company){
return this.httpService.put<Company>(this.baseUrl+"/company/update/"+sessionStorage.token,company);

  }

deleteCompany(companyId:number){
  return this.httpService.delete(this.baseUrl+"/company/delete/"+sessionStorage.token+"/"+companyId,
  {responseType:"text"});
}

getOneCompany(companyId:number){
  return this.httpService.get<Company>(this.baseUrl+"/company/"+sessionStorage.token+"/"+companyId)
}

getAllCompanies(){
  return this.httpService.get<Company[]>(this.baseUrl+"/company/all/" +sessionStorage.token)
}

addCustomer(customer:Customer){
  return this.httpService.post<Customer>(this.baseUrl+"/customer/add/"+sessionStorage.token,customer);
}

updateCustomer(customer:Customer){
  return this.httpService.put<Customer>(this.baseUrl+"/customer/update/"+sessionStorage.token,customer);
}


deleteCustomer(CustomerId:number){
  return this.httpService.delete(this.baseUrl+"/customer/delete/"+sessionStorage.token+"/"+CustomerId,
  {responseType:"text"});
}


getAllCustomer(){
  return this.httpService.get<Customer[]>(this.baseUrl+"/customer/all/"+sessionStorage.token)
}

getOneCustomer(CustomerId:number){
  return this.httpService.get<Customer>(this.baseUrl+"/customer/"+sessionStorage.token+"/"+CustomerId);
}

getAllCoupons(){
  return this.httpService.get<Coupon[]>(this.baseUrl+"/allCoupons/"+sessionStorage.token);
}

fetchImage(coupId:number){
  return this.httpService.get(this.baseUrl + "/getCouponImage/" + sessionStorage.token+"/"+coupId, {responseType:'blob'});
 }
 
 fetchDeletionFile(){
  return this.httpService.get(this.baseUrl + "/getDeletionFile/" + sessionStorage.token, {responseType:'blob'});
 }
 


readFile(fileName:string){
return this.httpService.get(fileName,{responseType:'text'});
 
 
} 

















}
