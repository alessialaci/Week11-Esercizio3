import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './navbar.component';
import { HomePage } from './pages/home.page';
import { ActivePostsPage } from './pages/active-posts.page';
import { InactivePostsPage } from './pages/inactive-posts.page';
import { PostCardComponent } from './components/post-card.component';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PostDetailsPage } from './pages/post-details.page';
import { UsersPage } from './pages/users.page';
import { UsersDetailsPage } from './pages/users-details.page';
import { AuthModule } from './auth/auth.module';

const routes: Route[] = [
    {
        path: "",
        component: HomePage
    },
    {
        path: "active-posts",
        component: ActivePostsPage
    },
    {
        path: "inactive-posts",
        component: InactivePostsPage
    },
    {
        path: "active-posts/:id",
        component: PostDetailsPage
    },
    {
        path: "inactive-posts/:id",
        component: PostDetailsPage
    },
    {
        path: "users",
        component: UsersPage,
        children: [
            {
                path: ":id",
                component: UsersDetailsPage
            }
        ]
    },
    /*{
        path: "login",
        LoginPage
    },
    {
        path: "signup",
        component: SignupPage
    }, */
    {
        path: "**",
        redirectTo: ""
    },
    {
        path: 'auth',
        loadChildren: ()=> {return import('./auth/auth.module').then(m => {return m.AuthModule})}
    }
]

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomePage,
        ActivePostsPage,
        InactivePostsPage,
        PostCardComponent,
        MaiuscoloPipe,
        HighlightDirective,
        PostDetailsPage,
        UsersPage,
        UsersDetailsPage
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        AuthModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
