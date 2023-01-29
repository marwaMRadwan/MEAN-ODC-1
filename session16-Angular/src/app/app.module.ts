import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { LoginComponent } from './pages/login/login.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { UsersComponent } from './pages/users/users.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PostsComponent } from './pages/posts/posts.component';
import { CountComponent } from './components/count/count.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    SearchResultComponent,
    LoginComponent,
    GalleryComponent,
    ParentComponent,
    ChildComponent,
    UsersComponent,
    UserFormComponent,
    PostsComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
