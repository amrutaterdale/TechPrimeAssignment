import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  constructor(private ser:ServiceService) { }

  allproject:any=[];

  ngOnInit() {

    this.ser.getAllProject().subscribe(d=>this.allproject=d);
  }

  refresh()
  {
    this.ser.getAllProject().subscribe(d=>this.allproject=d);
  }

  delete(i)
  {
     this.ser.deleteproject(i).subscribe(d=>this.refresh());
  }

  edit(i,obj)
  {
    this.ser.updateproject(i,obj).subscribe(d=>this.refresh());
  }

}
