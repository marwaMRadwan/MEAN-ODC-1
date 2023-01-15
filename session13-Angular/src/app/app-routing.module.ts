import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { ErrorComponent } from './pages/error/error.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { IndexComponent } from './pages/index/index.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path:'' , component: IndexComponent},
  {path:'contact' , component:ContactComponent},
  {path:'users' , component:UsersComponent},
  {path:'gallery' , component:GalleryComponent},
  {path:'users/add' , component:AddUserComponent},
  {path:'users/edit' , component:EditUserComponent},
  {path:'posts' , component:PostsComponent},
  {path:'posts/:postId' , component:SinglePostComponent },
  {path:"**" , component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
