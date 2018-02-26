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

  getAnnouncements() {
    return this.afs.collection('announcement');
  }

  getMembers() {
    return this.afs.collection('members').snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getTeamMembers(team) {
    return this.afs.collection('members', ref => ref.where('Team', '==', team)).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getAttendance(id, date) {
    return this.afs.collection('members').doc(id).collection('attendance', ref => ref.where('date', '==', date))
    .snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  addPost(title: string, content: string) {
    this.afs.collection('posts').add({'title': title, 'content': content});
  }

  addMembers(name: string, team: string) {
    this.afs.collection('members').add({'Name': name, 'Team': team});
  }
  addAnnouncement(content: string, group: string, teamcolor: string, title: string, writer: string) {
    this.afs.collection('announcement').add({'Content': content, 'Group': group, 'TeamColor': teamcolor, 'Title': title, 'Writer': writer});
  }

  addAttendance(id, date, service, meeting) {
    let data: any;
    this.getAttendance(id, date).subscribe(res => {
      data = res;
      console.log(data);
      if (data.length > 0) {
        console.log('has data id: ' + id + ' attendance id: ' + data[0].id);
        this.afs.collection('members').doc(id).collection('attendance').doc(data[0].id).update({'service': service, 'meeting': meeting});
      } else {
        console.log('adding new data...');
        this.afs.collection('members').doc(id).collection('attendance').add({'date': date, 'service': service, 'meeting': meeting});
      }
      return;
    });
  }

  getDocumentId() {
    return this.afs.collection('members').snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }
}
