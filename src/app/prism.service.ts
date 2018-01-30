import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content: string;
}

@Injectable()
export class PrismService {

  postsCol: AngularFirestoreCollection<Post>;

  constructor(
    private afs: AngularFirestore
  ) { }

  getPosts() {
    // this.postsCol = this.afs.collection('posts');
    // return this.postsCol.snapshotChanges()
    // .map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Post;
    //     const id = a.payload.doc.id;
    //     return { id, data };
    //   });
    // });
    return this.afs.collection('posts');
  }
}
