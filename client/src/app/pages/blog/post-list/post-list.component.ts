import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    // Get list post
    this.http.get<any[]>('/api/posts').subscribe(data => {
      this.posts = data;
    });
  }
}
