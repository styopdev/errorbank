import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserPostsComponent } from "@app/+user/user-posts/user-posts.component";
import { UserComponent } from "@app/+user/user.component";
import { UserFavoritePostsComponent } from "@app/+user/user-favorite-posts/user-favorite-posts.component";

const routes: Routes = [{
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'posts',
        component: UserPostsComponent
      },
      {
        path: 'favorite-posts',
        component: UserFavoritePostsComponent
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}