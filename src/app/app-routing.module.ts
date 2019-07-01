import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserFormComponent} from './user-form/user-form.component';
import {LessonFormComponent} from './lesson-form/lesson-form.component';
import {TeacherFormComponent} from './teacher-form/teacher-form.component';
import {ClassroomFormComponent} from './classroom-form/classroom-form.component';
import {LoginComponent} from './login/login.component';
import {TeacherDelFormComponent} from './teacher-del-form/teacher-del-form.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthGuardGuard} from './guard/auth-guard.guard';
import {ClassFormComponent} from './class-form/class-form.component';
import {TimetableForGroupsComponent} from './timetable-for-groups/timetable-for-groups.component';
import {TimetableForTeachersComponent} from './timetable-for-teachers/timetable-for-teachers.component';
import {TimetableForClassroomsComponent} from './timetable-for-classrooms/timetable-for-classrooms.component';
import {ClassroomDelFormComponent} from './classroom-del-form/classroom-del-form.component';
import {ClassDelFormComponent} from './class-del-form/class-del-form.component';
import {LessonDelFormComponent} from './lesson-del-form/lesson-del-form.component';
import {CheckOperationComponent} from './check-operation/check-operation.component';


const routes: Routes = [
  { path: 'users', component: UserListComponent},
  { path: 'adduser', component: UserFormComponent},
  { path: 'timetable/classname/:id', component: TimetableForGroupsComponent},
  { path: 'timetable/teacher/:id', component: TimetableForTeachersComponent},
  { path: 'timetable/classroom/:id', component: TimetableForClassroomsComponent},
  { path: 'addlesson', component: LessonFormComponent, canActivate:[AuthGuardGuard]},
  { path: 'dellesson', component: LessonDelFormComponent, canActivate:[AuthGuardGuard]},
  { path: 'addteacher', component: TeacherFormComponent, canActivate:[AuthGuardGuard]},
  { path: 'delteacher', component: TeacherDelFormComponent, canActivate:[AuthGuardGuard]},
  { path: 'addclassroom', component: ClassroomFormComponent, canActivate:[AuthGuardGuard]},
  { path: 'delclassroom', component: ClassroomDelFormComponent, canActivate:[AuthGuardGuard]},
  { path: 'addclass', component: ClassFormComponent, canActivate:[AuthGuardGuard]},
  { path: 'delclass', component: ClassDelFormComponent, canActivate:[AuthGuardGuard]},
  { path: 'check', component: CheckOperationComponent, canActivate:[AuthGuardGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
