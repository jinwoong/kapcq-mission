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

  // postsCol: AngularFirestoreCollection<Post>;
  posts:any;
  title:string;
  content:string;
  constructor(
    // private afs: AngularFirestore,
    private ps: PrismService
  ) { 

  }

  ngOnInit() {
    //this.postsCol = this.afs.collection('posts');
    this.posts = this.ps.getPosts().valueChanges();
    console.log(this.posts);
  }

  submit() {
    console.log(this.title);
    console.log(this.content);
    if(this.title && this.content) {
      this.ps.addPost(this.title, this.content);
    }
  }

}
