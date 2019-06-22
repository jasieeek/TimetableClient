import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserFormComponent} from './user-form/user-form.component';
import {TimetableComponent} from './timetable/timetable.component';
import {LessonFormComponent} from './lesson-form/lesson-form.component';
import {FirstAComponent} from './timetable/first-a/first-a.component';
import {FirstBComponent} from './timetable/first-b/first-b.component';
import {TeacherFormComponent} from './teacher-form/teacher-form.component';
import {Classroom} from './model/classroom';
import {ClassroomFormComponent} from './classroom-form/classroom-form.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'timetable', component: TimetableComponent},
  { path: 'addlesson', component: LessonFormComponent},
  { path: 'addteacher', component: TeacherFormComponent},
  { path: 'addclassroom', component: ClassroomFormComponent},
  { path: 'timetable/1A', component: FirstAComponent},
  { path: 'timetable/1B', component: FirstBComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
