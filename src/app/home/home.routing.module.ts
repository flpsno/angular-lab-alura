import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginGuard } from '../core/auth/login.guard';
import { SignInComponent } from './sigin/signin.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuard],
        children: [
            {
                path: '',
                component: SignInComponent,
                canActivate: [LoginGuard]
            },
            {
                path: 'signup',
                component: SignUpComponent,
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
