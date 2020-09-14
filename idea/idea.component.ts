import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup} from '@angular/forms';
import { ServiceService } from '../service.service';

export interface roots
{
 value:string;
}

export interface types
{
 value:string;
}
export interface divisions
{
 value:string;
}
export interface categories
{
 value:string;
}
export interface forM
{
 value:string;
}
export interface departments
{
 value:string;
}
export interface locations
{
 value:string;
}

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})


export class IdeaComponent implements OnInit {

  constructor(private ser:ServiceService) { }
  idea:any={};
  root:string;
  type:string;
  division:string;
  category:string;
  fM:string;
  department:string;
  location:string;

  ngOnInit() {
  }

 
  roots:roots[]=[{value:"Business Plan"},{value:"Other Plan"}];
  types:types[]=[{value:"TDR"},{value:"Six Sigma"},{value:"FRP"}];
  divisions:divisions[]=[{value:"Platform"},{value:"Refrigerator"},{value:"Air Conditioner"}];
  categories:categories[]=[{value:"Quality A"},{value:"Quality B"},{value:"Quality C"}];
  forM:forM[]=[{value:"Man"}];
  departments:departments[]=[{value:"Strategy"}];
  locations:locations[]=[{value:"Pune"},{value:"Mumbai"}];

  

  


  onSubmit() {
    alert('Data: ' + JSON.stringify(this.idea));
    this.ser.sendData(this.idea).subscribe();
  }

}
