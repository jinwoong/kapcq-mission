import { Component, OnInit, Inject } from '@angular/core';
import { PrismService } from '../prism.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


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
	foods = [
	{value: 'steak-0', viewValue: 'Steak'},
	{value: 'pizza-1', viewValue: 'Pizza'},
	{value: 'tacos-2', viewValue: 'Tacos'}
	];
	title: string;
	name: string;
	content: string;
	group: string;
	team: string;
	constructor(private ps: PrismService, public dialog: MatDialog) { }

	openDialog(): void{
		let dialogRef = this.dialog.open(CreatePostDialog,{
			width: '450px',
			data: { name: this.name, group: this.group, team: this.team, title: this.title, content: this.content }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			this.name = result;
			this.title = result;
			console.log(this.name);
			console.log(this.title);
		});
	}


	ngOnInit() {
		this.ps.getAnnouncements().valueChanges().subscribe(res => {
			this.announcement = res;
			console.log(this.announcement[0]);
		})
	}
}

@Component({
	selector: 'create-post-dialog',
	templateUrl: 'create-post-dialog.html',
})
export class CreatePostDialog {

	constructor(
		public dialogRef: MatDialogRef<CreatePostDialog>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	onNoClick(): void {
		this.dialogRef.close();
	}

}


