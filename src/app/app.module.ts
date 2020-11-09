import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UsersComponent } from './users/users.component';
import { ReposComponent } from './repos/repos.component';
import { GitUserDirective } from './git-user.directive';
import { GitReposPipe } from './git-repos.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SearchFORMComponent } from './search-form/search-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersComponent,
    ReposComponent,
    GitUserDirective,
    GitReposPipe,
    SearchFORMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
