import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {SignupComponent} from './signup/signup.component';
import {LandingComponent} from './landing/landing.component';
import {LoginComponent} from './login/login.component';
import {CreateSubjectComponent} from './create-subject/create-subject.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'user-profile', component: ProfileComponent},
    {path: 'register', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'create-subject', component: CreateSubjectComponent},
    {path: 'edit-subject/:id', component: CreateSubjectComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
