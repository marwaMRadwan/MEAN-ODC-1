import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TestComponent } from './pages/test/test.component';
import { UpdateImageComponent } from './pages/update-image/update-image.component';

const routes: Routes = [
  {path:'' , component:IndexComponent},
  {path:'login' , component:LoginComponent},
  {path:'test/login' , component:TestComponent},
  {path:'posts' , children:[
    {path:'' , component : PostsComponent},
    {path:'single/:id' , component : SinglePostComponent},
  ]},
  {path:'update-image' , component:UpdateImageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
