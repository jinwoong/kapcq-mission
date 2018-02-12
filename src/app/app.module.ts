import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PrismMaterialModule } from './prism-material/prism-material.module';
import { PrismRoutingModule } from './prism-routing/prism-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


import { environment } from '../environments/environment';
import { PrismService } from './prism.service';

import { AppComponent } from './app.component';
import { MemberManagementComponent } from './member-management/member-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManagementComponent } from './management/management.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CreatePostComponent } from './create-post/create-post.component';


var firebaseConfig = {
  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  databaseURL: environment.databaseURL,
  projectId: environment.projectId,
  storageBucket: environment.storageBucket,
  messagingSenderId: environment.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    MemberManagementComponent,
    DashboardComponent,
    AdminComponent,
    ManagementComponent,
    AnnouncementComponent,
    AttendanceComponent,
    CreatePostComponent,
  ],
  imports: [
    BrowserModule,
    PrismMaterialModule,
    PrismRoutingModule,
    MatGridListModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [PrismService],
  bootstrap: [AppComponent]
})
export class AppModule { }
