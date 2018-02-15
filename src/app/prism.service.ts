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
    return this.afs.collection('posts');
  }

  getAnnouncements(){
    return this.afs.collection('announcement');
  }

  getMembers() {
    return this.afs.collection('members');
  }

  getTeamMembers(team) {
    return this.afs.collection('members', ref => ref.where('Team','==',team))
  }

  addPost(title: string, content: string) {
    this.afs.collection('posts').add({'title': title, 'content': content});
  }

  addMembers(name: string, team: string) {
    this.afs.collection('members').add({'Name': name, 'Team': team});
  }
}
