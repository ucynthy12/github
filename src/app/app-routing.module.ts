import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{UsersComponent} from './users/users.component';
import { ReposComponent } from './repos/repos.component';

const routes: Routes = [
  {path:'user',component:UsersComponent},
  {path:'repos',component:ReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
