import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from '../login/login.component';
import {SignupComponent} from '../signup/signup.component';
import {AuthLayoutRoutes} from './auth-layout.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AuthLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        // NgbModule
    ],
    declarations: [
        LoginComponent,
        SignupComponent
    ]
})
export class AuthLayoutModule { }
