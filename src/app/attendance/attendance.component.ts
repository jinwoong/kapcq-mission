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

  constructor(
    private ps: PrismService
  ) { }

  ngOnInit() {
  }

  getTeamMembers() {
    console.log(this.team);
    this.ps.getTeamMembers(this.team).valueChanges().subscribe(res => {
      this.members = res;
      console.log(this.members);
    });
  }
}
