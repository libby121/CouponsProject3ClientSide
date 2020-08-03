import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Coupon } from 'src/app/models/coupon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-coupons',
  templateUrl: './all-coupons.component.html',
  styleUrls: ['./all-coupons.component.css']
})
export class AllCouponsComponent implements OnInit {

  allCoups:Coupon[];
  imageSrcs:string[]=[];
   dtOptions: DataTables.Settings = {};
   isImage:boolean=true;
   constructor(private service:AdminService, private router:Router) { }

  ngOnInit(): void {
      this.service.getAllCoupons().subscribe((coups)=>{
       this.allCoups=coups;
      for(let i=0;i<this.allCoups.length;i++){
     if(this.allCoups[i].image==null){ 
     this.imageSrcs[this.allCoups[i]?.id]="assets/images/box.jpg" ;console.log( this.imageSrcs[this.allCoups[i]?.id])}
       else{ this.service.fetchImage(this.allCoups[i]?.id).subscribe((image)=>{
          
          var reader = new FileReader();
          reader.readAsDataURL(image);
          var textBase64 = '';
          reader.onloadend=()=> {
            var base64String = reader.result;
           
            textBase64 = base64String + '';
            
            this.imageSrcs[this.allCoups[i]?.id]=textBase64;
           
           
           
            
          }})
     
        }}
     
     
      }, (err)=>{
      if(err.status===401){
        sessionStorage.removeItem('token');
         this.router.navigate(["login"])
       
          }else alert(err.error)
     })
     this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      processing: true,
     "columnDefs": [ {
      "targets": [ 0,8],
      "orderable": false,
     
    },
     {
      "targets": [4,5 ],
      "type":"num-fmt"
    },{
      "targets": [6,7 ],
      "type":"date"
    }]
   }

 
 
 
 
 

  }}
