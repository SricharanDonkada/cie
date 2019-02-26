import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'signup', component: SignupComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'login',component: LoginComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'subscribe', component: SubscribeComponent},
  {path: '**', component: PageNotFoundComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };

export const appRouting = [HomeComponent,SignupComponent,AboutusComponent,LoginComponent,PostsComponent,ContactusComponent,PageNotFoundComponent,SubscribeComponent];
