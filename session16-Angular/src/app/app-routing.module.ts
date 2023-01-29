import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { ParentComponent } from './pages/parent/parent.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  {path:'' , component:IndexComponent},
  {path:'login' , component:LoginComponent},
  {path:'gallery' , component:GalleryComponent},
  {path:'posts' , component:PostsComponent},
  {path: 'counter' , component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
