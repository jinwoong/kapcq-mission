import { Component, OnInit, Inject } from '@angular/core';
import { PrismService } from '../prism.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
 selector: 'app-create-post-dialog',
 templateUrl: './create-post-dialog.component.html',
 styleUrls: ['./create-post-dialog.component.css']
})
export class CreatePostDialogComponent implements OnInit {

 title: string;
 name: string;
 content: string;
 group: string;
 team: string;

constructor(
 private ps: PrismService,
 public dialogRef: MatDialogRef<CreatePostDialogComponent>,
 @Inject(MAT_DIALOG_DATA) public data: any) { }

onNoClick(): void {
 this.dialogRef.close();
}
submit(): void {
 this.ps.addAnnouncement(this.content, this.group, this.team, this.title, this.name);
 console.log(this.group);
 this.dialogRef.close();
}

ngOnInit() {}
}
