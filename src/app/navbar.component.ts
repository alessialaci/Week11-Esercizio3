import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'app-navbar',
    template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">Hidden brand</a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                [routerLink]="['/']"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/active-posts']"
                routerLinkActive="active"
                >Posts attivi</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/inactive-posts']"
                routerLinkActive="active"
                >Posts non attivi</a
              >
            </li>
            <li class="nav-item">
              <a *ngIf="flag == true"
                class="nav-link"
                [routerLink]="['/users']"
                routerLinkActive="active"
                >Users</a
              >
            </li>
          </ul>
          <div class="d-flex">
                    <a class="nav-link text-secondary" role="button" *ngIf="!isLoggedIn" (click)="test()" routerLinkActive="active">Login</a>
                    <a class="nav-link text-secondary" role="button" *ngIf="!isLoggedIn" (click)="test2()" routerLinkActive="active">Logout</a>
            </div>
            <!-- [routerLink]="['/login']" -->
            <!-- [routerLink]="['/signup']" -->
        </div>
      </div>
    </nav>
  `,
    styles: [],
})
export class NavComponent implements OnInit {
    isLoggedIn: boolean = false;
    constructor(private authSrv: AuthService) { }

    ngOnInit(): void {
        this.authSrv.isLoggedIn$.subscribe((isLoggedIn) => {
            this.isLoggedIn = isLoggedIn
        });
    }

    // onLogin() {
    //   this.authSrv.login();
    // }

    onLogout() {
        this.authSrv.logout();
    }

    flag: boolean = false;

    test = () => {
        this.flag = true;
        console.log(this.flag)
    }

    test2 = () => {
        this.flag = false;
        console.log(this.flag)
    }
}

