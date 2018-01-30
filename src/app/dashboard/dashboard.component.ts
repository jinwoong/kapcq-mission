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

}
