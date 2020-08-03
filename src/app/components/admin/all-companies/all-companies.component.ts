import { Component, OnInit} from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/company';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCompanyComponent } from '../update-company/update-company.component';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-all-companies',
  templateUrl: './all-companies.component.html',
  styleUrls: ['./all-companies.component.css']
})
export class AllCompaniesComponent implements OnInit {
 companyId:number;
  companies:Company[];
  
  dtOptions: DataTables.Settings = {};

   constructor(private service:AdminService, private snack:MatSnackBar,
     private dialog:MatDialog, private router:Router) { }

  ngOnInit(): void {
    this.service.getAllCompanies().subscribe( (all)=>{
      this.companies=all;
      
    },(err)=>{
      if(err.status===401){
        sessionStorage.removeItem('token');
         this.router.navigate(["login"])
        //  alert(err.error);}
          }else alert(err.error)
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      processing: true,
     "columnDefs": [ {
      "targets": [0,1,3,4,6,7],
      "orderable": false,
     
    },
     {
      "targets": [5 ],
      "type":"num-fmt"
    },
   ]}
  }

  edit(id:number){
this.companyId=id;
let ref=this.dialog.open(UpdateCompanyComponent,{data:{id:this.companyId}})//data->for passing from this component to update component

ref.componentInstance.CompanyId=this.companyId;
  this.service.getOneCompany(this.companyId).subscribe( (newC)=>{
  ref.componentInstance.email?.setValue(newC.email);
  ref.componentInstance.name?.setValue(newC.name);
  ref.componentInstance.password?.setValue(newC.password);
  ref.componentInstance.balance?.setValue(newC.balance);
     },(err)=>{
      if(err.status===401){
        sessionStorage.removeItem('token');
         this.router.navigate(["login"])
        //  alert(err.error);}
          }else alert(err.error)
     })
   }

  delete(id:number){  
    
    this.companyId=id;
    
       this.service.deleteCompany(id).subscribe( (msg)=>{
         
        
         let index=this.companies.findIndex(x=>x.id==id);
         this.companies.splice(this.companies.indexOf(this.companies[index]),1);
         
    
    
    
   }
    , (err)=>{
      if(err.status===401){
        sessionStorage.removeItem('token');
         this.router.navigate(["login"])
        //  alert(err.error);}
          }else alert(err.error)
     
      
    })
   }
  
   byId(){
     if(this.companyId==null)return;
     this.service.getOneCompany(this.companyId).subscribe((company)=>{
       
        this.companies=[];
       this.companies[0]=company;
      
      
      
       
       },(err)=>{
        if(err.status===401){
          sessionStorage.removeItem('token');
           this.router.navigate(["login"])
          //  alert(err.error);}
            }else alert(err.error)
        
        
      })
   }
   showAll(){
    this.companies=[];

    this.service.getAllCompanies().subscribe( (all)=>{
      this.companies=all;
    },(err)=>{
      if(err.status===401){
        sessionStorage.removeItem('token');
         this.router.navigate(["login"])
        //  alert(err.error);}
          }else alert(err.error)
    })

   }
  }
  