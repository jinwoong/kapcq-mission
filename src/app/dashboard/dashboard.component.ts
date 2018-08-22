import { Component, OnInit } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import { PrismService } from '../prism.service';
import { Attendance } from '../model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  members: any;
  total: number;
  selectedDate: Date;
  data: any;
  meetingTotal: number = 0;
  worshipTotal: number = 0;

  teams = [];
  teamNames = [];
  teamName: string;

  attendanceData: Array<any> = [];
  teamAttendance: any;
  type = 'area';

  historicalAttendance: any = [
    { date: new Date('03/04/2018'), total: 67, service: 63, meeting: 45 },
    { date: new Date('03/11/2018'), total: 67, service: 61, meeting: 41 },
    { date: new Date('03/18/2018'), total: 73, service: 65, meeting: 38 },
    { date: new Date('03/25/2018'), total: 83, service: 61, meeting: 43 },
    { date: new Date('04/01/2018'), total: 85, service: 67, meeting: 6 },
  ]
  constructor(
    private ps: PrismService
  ) {}

  ngOnInit() {
    this.ps.getMembers().subscribe(res => {
      this.members = res;
      this.total = this.members.length;
    });
    this.ps.getTeamNames().subscribe(res => {
      this.teams = res;
      let flags = [], l = this.teams.length, i;
      for (i = 0; i < l; i++) {
        if (flags[this.teams[i].team_name]) continue;
        flags[this.teams[i].team_name] = true;
        this.teamNames.push(this.teams[i].team_name);
      }
      this.teamNames.sort();
    })
    let today = new Date();
    let first = today.getDate() - today.getDay();
    let firstDay = new Date(today.setDate(first));
    this.selectedDate = new Date(firstDay.toDateString());
    this.viewAttendance();
  }

  viewAttendance() {
    this.teamAttendance = [];
    if (this.attendanceData.length > 0) {
      this.attendanceData = [];
    }
    this.ps.getAttendance(this.selectedDate).subscribe(res => {
      this.data = res;
      this.worshipTotal = this.data.filter(attendance => attendance.service).length;
      this.meetingTotal = this.data.filter(attendance => attendance.meeting).length;

      for (let teamName of this.teamNames) {
        let team = new Attendance();
        team.team = teamName;
        team.total = this.data.filter(attendance => attendance.team_name === teamName).length;
        team.service = this.data.filter(attendance => attendance.team_name === teamName).filter(res => res.service).length;
        team.meeting = this.data.filter(attendance => attendance.team_name === teamName).filter(res => res.meeting).length;
        this.attendanceData.push(team);
      }
    });
  }

  onPointClick(e) {
    this.teamName = e.target.argument;
    this.teamAttendance = this.data.filter(attendance => attendance.team_name === e.target.argument);
    // var teamData = this.data.filter(attendance => attendance.team_name === e.target.argument)
    console.log(this.teamAttendance);
  }

}
