import { Component, OnInit } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import { PrismService } from '../prism.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  members: any;
  total: number;
  selectedDate: Date;
  constructor(
    private ps: PrismService
  ) {

  }

  ngOnInit() {
    this.ps.getMembers().subscribe(res => {
      this.members = res;
      this.total = this.members.length;
      this.selectedDate = new Date('2018-02-18');
      // console.log(this.members);
    });
  }

  viewAttendance() {
    for (const member of this.members) {
      this.ps.getAttendance(member.id, this.selectedDate).subscribe(response => {
        console.log(response);
      });
    }
  }

}
