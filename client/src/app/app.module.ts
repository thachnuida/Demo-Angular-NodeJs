import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './pages/blog/post-list/post-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddPostComponent } from './pages/blog/post-form/add-post.component';
import { PostComponent } from './components/post/post.component';
import { ChatComponent } from './pages/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NavbarComponent,
    AddPostComponent,
    PostComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
