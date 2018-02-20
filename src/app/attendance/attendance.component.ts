import { Component, OnInit } from '@angular/core';
import { PrismService } from '../prism.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  team: string;
  members: Array<any> = [];
  attendanceDate: Date;

  constructor(
    private ps: PrismService
  ) { }

  ngOnInit() {
  }

  getTeamMembers() {
    console.log(this.team);
    this.ps.getTeamMembers(this.team).subscribe(res => {
      this.members = res;
      console.log(this.members);
    });
  }

  addAttendance() {
    console.log("Adding attendance...");
    if (this.attendanceDate) {
      for (let member of this.members) {
        if (member.sundayChecked == undefined) {
          member.sundayChecked = false;
        }
        if (member.meetingChecked == undefined) {
          member.meetingChecked = false;
        }
        member.attendanceDate = this.attendanceDate;
        this.ps.addAttendance(member.id, member.attendanceDate, member.sundayChecked, member.meetingChecked);
      }
    }
  }
}
