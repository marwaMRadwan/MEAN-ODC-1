import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateChildGuard } from './guards/can-activate-child.guard';
import { CanActivateDashboardGuard } from './guards/can-activate-dashboard.guard';
import { CanActivateGuard } from './guards/can-activate.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { CategoriesComponent } from './pages/categories/categories.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { IndexComponent } from './pages/index/index.component';
import { LifeCycleComponent } from './pages/life-cycle/life-cycle.component';
import { LoginComponent } from './pages/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { ResolveService } from './services/resolve.service';

const routes: Routes = [
  {path:'home' , component:IndexComponent } ,
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'users' , component:UserListComponent},
  {path:'category' , component:CategoriesComponent},
  {path:'login' , component:LoginComponent , canActivate:[CanActivateGuard] , canDeactivate:[CanDeactivateGuard]},
  {path:'posts' , component:PostsComponent , data:{type :'posts'}},
  {path:'blogs' , component:PostsComponent , data:{type : 'blogs'}},
  {path:'dashboard' , canActivateChild:[CanActivateChildGuard],children:[
    {path:''  , component:DashboardComponent  },
    {path:'profile'  , component:ProfileComponent},
    {path:'edit-profile'  , component:EditProfileComponent},
  ]},
  {path:'gallery' , component:GalleryComponent , resolve:{galleryContent : ResolveService}},
  {path:'lifecycle' , component:LifeCycleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
