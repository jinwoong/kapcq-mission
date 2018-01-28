import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})

export class ManagementComponent implements OnInit {

  members: Array<any> = [{ 
      Name: "Jinwoong",
      Position: "Associate",
      Team: "GA",
      Phone: "(212) 823-3135",
      Birthday: "11/28/1990",
      Email: "jinwoong.joung@alliancebernstein.com" 
    }, {
      Name: "Eunjung", 
      Position: "Leader",
      Team: "햄볶음",
    }, {
      Name: "최재영",
      Position: "Executive",
      Team: "Do you know my name?",
      Phone: "",
      Birthday: "",
      Email: ""
    }, {
      Name: "윤혜진",
      Position: "Leader",
      Team: "Do you know my name?",
      Phone: "",
      Birthday: "",
      Email: ""
    }, {
      Name: "김아란",
      Position: "Leader",
      Team: "김선자",
      Phone: "",
      Birthday: "",
      Email: ""
    }, {
      Name: "황현희",
      Position: "Executive",
      Team: "아람단",
      Phone: "",
      Birthday: "",
      Email: ""
    }, {
      Name: "박지현",
      Position: "Member",
      Team: "YOLO",
      Phone: "",
      Birthday: "",
      Email: ""
    }, {
      Name: "강성환",
      Position: "Member",
      Team: "YOLO",
      Phone: "",
      Birthday: "",
      Email: ""
    }, {
      Name: "황현희",
      Position: "Executive",
      Team: "아람단",
      Phone: "",
      Birthday: "",
      Email: ""
    }, {
      Name: "황현희",
      Position: "Executive",
      Team: "아람단",
      Phone: "",
      Birthday: "",
      Email: ""
    }, {
      Name: "황현희",
      Position: "Executive",
      Team: "아람단",
      Phone: "",
      Birthday: "",
      Email: ""
    }
  ];

  constructor() { }

  ngOnInit() {

  }

}
