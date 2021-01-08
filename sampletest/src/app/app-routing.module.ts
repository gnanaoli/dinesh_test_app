import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login_Module/login/login.component';
import { UserregistrationComponent } from './Registration_Module/userregistration/userregistration.component';
import { DataGridAPIComponent } from './User_Module/data-grid-api/data-grid-api.component';

const routes: Routes = [
  { path: '', component:LoginComponent  },
  { path: 'registration', component:UserregistrationComponent  },
  { path: 'datagrid', component:DataGridAPIComponent  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
