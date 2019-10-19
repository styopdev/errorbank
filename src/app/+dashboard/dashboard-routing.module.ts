import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '@app/+dashboard/dashboard.component';
import { CreatePostComponent } from '@app/+dashboard/create-post/create-post.component';
import { ListPostsComponent } from '@app/+dashboard/list-errors/list-posts.component';
import {EditPostComponent} from "@app/+dashboard/edit-post/edit-post.component";
import {ViewPostComponent} from "@app/+dashboard/view-post/view-post.component";



const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: 'get-all',
      component: ListPostsComponent
    },
    {
      path: 'create',
      component: CreatePostComponent
    },
    {
      path: 'edit/:id',
      component: EditPostComponent
    },
    {
      path: 'view/:id',
      component: ViewPostComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}
