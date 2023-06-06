import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  data="happy banking with us"
  pdata="enter acno"

  serviceData:any

  acno:any
  psw:any

  constructor(private router:Router,private ds:DataService) {}

  ngOnInit(): void {
      // this.serviceData=this.ds
      // console.log(this.serviceData);
      // this.ds.smethod()
      
  }

  // login(a:any){
  //   console.log(a.value);
    

  //   alert('login clicked')
  //   this.router.navigateByUrl('home')
  // }

  // acnoChange(event:any){
  //   console.log(event.target.value);
    
  // }

  login(){
    var acno = this.acno
    var psw = this.psw
    this.ds.login(acno,psw).subscribe((result:any) => {
      alert(result.message)
      this.router.navigateByUrl('home')

    },
    result =>{
      alert(result.error.message)
    })
    
  }

  
}
// constructor(){} and ngOnInit():{} are the methods used in here.