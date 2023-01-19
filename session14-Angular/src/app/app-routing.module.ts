import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';
import { RegisterComponent } from './pages/register/register.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';

const routes: Routes = [
  {path:'' , component:IndexComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  // {path:'posts' , component:PostsComponent},
  // {path:'posts/:id' , component:PostsComponent},
  // {path:'posts/addPost' , component:PostsComponent},
  {path:'posts' , children:[
    {path:'' , component:PostsComponent },
    {path:':id' , component:SinglePostComponent },
    {path:'addPost' , component:AddPostComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
