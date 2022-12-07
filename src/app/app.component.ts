import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {
  constructor(
    private postsSrv: PostsService,
    private usersSrv: UsersService
  ){

  }
}
