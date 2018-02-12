import { Component, OnInit } from '@angular/core';
import { PrismService } from '../prism.service';

@Component({
	selector: 'app-announcement',
	templateUrl: './announcement.component.html',
	styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

	announcement: any;
	tiles = [
	{text: 'One', cols: 4, rows: 4, color: 'lightblue'},
	{text: 'Two', cols: 4, rows: 4, color: 'lightgreen'},
	{text: 'Three', cols: 4, rows: 4, color: 'lightpink'},
	{text: 'Four', cols: 4, rows: 4, color: '#DDBDF1'},
	];

	constructor(private ps: PrismService) { }

	ngOnInit() {
		this.ps.getAnnouncements().valueChanges().subscribe(res => {
			this.announcement = res;
			console.log(this.announcement[0]);
		})
	}
}

