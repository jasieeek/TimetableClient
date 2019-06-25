import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserFormComponent} from './user-form/user-form.component';
import {TimetableComponent} from './timetable/timetable.component';
import {LessonFormComponent} from './lesson-form/lesson-form.component';
import {TeacherFormComponent} from './teacher-form/teacher-form.component';
import {ClassroomFormComponent} from './classroom-form/classroom-form.component';
import {LoginComponent} from './login/login.component';
import {TeacherDelFormComponent} from './teacher-del-form/teacher-del-form.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthGuardGuard} from './guard/auth-guard.guard';


const routes: Routes = [
  { path: 'users', component: UserListComponent},
  { path: 'adduser', component: UserFormComponent},
  { path: 'timetable/:id', component: TimetableComponent},
  { path: 'addlesson', component: LessonFormComponent, canActivate:[AuthGuardGuard]},
  { path: 'addteacher', component: TeacherFormComponent, canActivate:[AuthGuardGuard]},
  { path: 'delteacher', component: TeacherDelFormComponent, canActivate:[AuthGuardGuard]},
  { path: 'addclassroom', component: ClassroomFormComponent, canActivate:[AuthGuardGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
