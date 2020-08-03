import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { Coupon } from 'src/app/models/coupon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Company } from 'src/app/models/company';
import { Category } from 'src/app/models/category.enum';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {
  form: FormGroup;
  file: File = null;
  compa;
  isImage = false;
  ImageUrl;
  desc;
  pri;
  amou;
  date1;
  date2;
  imageName;
  coup;
  categ;
  upTitle;
  id;
  uploadType;

  categories = Object.values(Category).filter(c => typeof c === "string")

  constructor(private service: CompanyService, private fb: FormBuilder,
    private snack: MatSnackBar, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    this.service.getDetails().subscribe((company) => {
      this.compa = company;
    
    })
                    
    if (this.id!=null) {
      
      this.service.getOne(this.id).subscribe((co) => {
         
        this.upTitle = co.title;
        this.desc = co.description;
        this.pri = co.price;
        this.date1 = co.startDate;
        this.date2 = co.endDate;
        this.categ = co.category;
        this.compa=co.company;
        this.amou=co.amount;
        this.imageName=co?.image;
         
        this.service.fetchImage(this.id).subscribe((image) => {
        
        
        
          var reader = new FileReader();
          reader.readAsDataURL(image);
          var textBase64 = '';
          reader.onloadend = function () {
            var base64String = reader.result;
            //console.log('Base64 String - ', base64String);
            textBase64 = base64String + '';
            document.getElementById('myimg').setAttribute('src', textBase64);
            
          }
        })

      }, (err) => {
        console.log(err.message)
        if(err.status===401){
          sessionStorage.removeItem('token');
           this.router.navigate(["login"])
          
            }else alert(err.error)}
            )}
       
    }
 
    // uploadMethod(event){
    // this.uploadType=event.target.value;
    // }
  change(event: any) {
    this.categ = event.target.value;
  };


  selectFile(event: any) {

    this.file = event.target.files[0];
    console.log(this.file);
    let reader = new FileReader();
    reader.readAsDataURL(this?.file);
    reader.onload = (event) => {
      this.ImageUrl = event.target.result;
      this.isImage = true;

    }


  }
  ;
  uploadFile() {
    const fd = new FormData();
    fd.append("file", this?.file, this.file?.name);
    this.service.uploadImage(fd).subscribe((rep: string) => {
    //  alert("coupon image successfully uploaded!")
     


    }, (error) => {
      if(error.status===401){
        sessionStorage.removeItem('token');
         this.router.navigate(["login"])
        
          }else alert(error.message)
          })
  
  }
  update(couponi: Coupon) {
   
    couponi.id=this.id
    couponi.company=this.compa;
    if(this.file?.name==null && this.id!=null){ couponi.image=this.imageName;console.log(this.imageName)}
     else if(this.file?.name==null) 
    couponi.image=this.imageName;
    
  
    else { this.uploadFile();
      
      couponi.image=this.file.name
     
    }
   
      console.log(couponi);
    this.service.updateCoupon(couponi).subscribe((newC) => {
    
      this.snack.open("coupon "+newC.title+"  was updated successfully"
        , "ok, cool",
        { duration: 6000 });
    }, (err) => {
      if(err.status===401){
        
       sessionStorage.removeItem('token');
         this.router.navigate(["login"])
        
          }else alert(err.error)
          
    }
    );
  };

  add2(coupo: Coupon) {
             let coup = coupo;
    coup.image = this.file?.name;

    this.service.addCoupon(coup).subscribe((newC) => {
      this.snack.open("coupon " + newC.title + " addded successfully!",
        "Great!", { duration: 6000 })
     
     
     
    }, (err) => {
      if(err.status===401){
        sessionStorage.removeItem('token');
         this.router.navigate(["login"])
         
          }else alert(err.error)
          })};

   
  }

                    











