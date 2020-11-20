import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import {AuthGuard} from './auth/routers/auth.guard';
import {DepartmentComponent} from './department/department.component';

const routes: Routes = [{path: '', component: DepartmentComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
