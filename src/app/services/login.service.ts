import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientType } from '../models/client-type.enum';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService:HttpClient,
  
   ) {this.isLogged=false }

   public isLogged:boolean;

  baseUrl="http://localhost:8080/client";

  login(email:string,password:string,client:ClientType){//null-i send nothing in body
    
    return this.httpService.post(this.baseUrl+"/login/"+email+"/"+password+"/"+client,null,{responseType:"text"})
  }

  logout(){
    return this.httpService.post(this.baseUrl+"/logout/"+sessionStorage.token,null,{responseType:"text"});
  }
}
