import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-read-file',
  templateUrl: './read-file.component.html',
  styleUrls: ['./read-file.component.css']
})
export class ReadFileComponent implements OnInit {
text;
  constructor(private service:AdminService) { }

  textBase64;
  ngOnInit(): void {
    this.service.fetchDeletionFile().subscribe((file)=>{
      console.log(file);
      var reader = new FileReader();
      reader.readAsText(file);
      var textBase64 = '';
      reader.onloadend=()=> {
        var base64String = reader.result;
       
        textBase64 = base64String + '';
        this.text=textBase64
         
  
  
  
}})}
}
  




 //this.service.readFile("Desktop/eclipse2/CouponsSystem2").subscribe((file)=>{
    //this.service.get("assets/files/CouponsArchiveFile.txt",{responseType:'text'}).subscribe((file)=>{
    //this.service.get("C:/TestsF/CouponsArchiveFile.txt",{responseType:'text'}).subscribe((file)=>{
// 
      // console.log(file.toString());
//  this.text=file.toString();
    // })
  


