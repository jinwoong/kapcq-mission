import { Component, OnInit } from '@angular/core';
import { PrismService } from '../prism.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})

export class ManagementComponent implements OnInit {

  members:any;

  constructor(
    private ps: PrismService
  ) { }

  ngOnInit() {
    this.ps.getMembers().valueChanges().subscribe(res => {
      this.members = res;
    })
    //console.log(this.members);
  }

  addMember(e) {
    //console.log(e)
    if (e.data.Name && e.data.Team) {
      this.ps.addMembers(e.data.Name, e.data.Team);
    }
  }

}
