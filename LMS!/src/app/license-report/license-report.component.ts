import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
// import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-license-report',
  templateUrl: './license-report.component.html',
  styleUrls: ['./license-report.component.css']
})
export class LicenseReportComponent implements OnInit {

  Intent = {};
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  // pdf(){
  //   const doc = new jsPDF();
  //    doc.

  // }

  ngOnInit() {
    this.getLicenseDetails(this.route.snapshot.params['id']);
  }


  getLicenseDetails(id) {
    console.log('id',id)
    this.api.getReport(id)
     
      .subscribe(data => {
        console.log('data',data);
        this.Intent = data;
      });
  }


  deleteReport(id) {
    this.api.deleteReport(id)
      .subscribe(res => {
          this.router.navigate(['/LADetails']);
        }, (err) => {
          console.log(err);
        }
      );
  }


}
