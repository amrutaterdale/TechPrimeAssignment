import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ser:ServiceService) { }
  regdata:any=[];
  username:string;
  password:string;

  ngOnInit() {
    // this.ser.getRegisterData().subscribe(d=>this.regdata=d);
  }

  flag:boolean=false;
  login()
  {
    this.ser.getRegisterData().subscribe(d=>{this.regdata=d
    for(let i=0;i<this.regdata.employees.length;i++)
    {
      if(this.username==this.regdata.employees[i].email && this.password==this.regdata.employees[i].password)
      {
        alert("user login successful");
        this.flag=true;
      }
     
    }
    if(this.flag==false)
  {
    alert("please enter valid username and password");
  }
  });

  
  }

}
