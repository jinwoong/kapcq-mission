import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberManagementComponent } from '../member-management/member-management.component';
import { AdminComponent } from '../admin/admin.component';


const routes: Routes = [
  { path: 'member-management', component: MemberManagementComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PrismRoutingModule { }
