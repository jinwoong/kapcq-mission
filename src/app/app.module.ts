import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PrismMaterialModule } from './prism-material/prism-material.module';
import { PrismRoutingModule } from './prism-routing/prism-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MemberManagementComponent } from './member-management/member-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';

var firebaseConfig = {
  apiKey: "AIzaSyDBKR4Ra6RwlxznrtLxzwaIFlKTXZntYZ0",
  authDomain: "kapcq-dev.firebaseapp.com",
  databaseURL: "https://kapcq-dev.firebaseio.com",
  projectId: "kapcq-dev",
  storageBucket: "",
  messagingSenderId: "628962386546"
};

@NgModule({
  declarations: [
    AppComponent,
    MemberManagementComponent,
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    PrismMaterialModule,
    PrismRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
