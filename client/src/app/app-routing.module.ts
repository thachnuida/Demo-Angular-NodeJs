import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './pages/blog/post-list/post-list.component';
import { AddPostComponent } from './pages/blog/post-form/add-post.component';
import { ChatComponent } from './pages/chat/chat.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: 'add-post',
    component: AddPostComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
