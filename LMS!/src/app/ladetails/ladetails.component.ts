import { Component, OnInit,ViewChild} from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-ladetails',
  templateUrl: './ladetails.component.html',
  styleUrls: ['./ladetails.component.css']
})
export class LADetailsComponent  implements OnInit {
  Intents: any;
  
 displayedColumns: string[] =['firstname', 'contact', 'email','company'];
  
 dataSource = new MatTableDataSource();
  
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //  dataSource = new IntentDataSource(this.api);
  
   constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLAdetails()
    .subscribe(res => {
    this.dataSource = new MatTableDataSource(res);
      console.log('res:',res);
      this.Intents = res;
      console.log('this.Intents:',this.Intents)
    }, err => {
      console.log(err);
    });
  }

}

export class IntentDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getLAdetails();
  }

  disconnect() {

  }

}
