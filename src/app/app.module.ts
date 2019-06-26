import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {RouterModule, Routes} from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserServiceService} from './service/user-service.service';
import { TimetableComponent } from './timetable/timetable.component';
import {LessonService} from './service/lesson.service';
import { LessonFormComponent } from './lesson-form/lesson-form.component';
import { FirstAComponent } from './timetable/first-a/first-a.component';
import { FirstBComponent } from './timetable/first-b/first-b.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { ClassroomFormComponent } from './classroom-form/classroom-form.component';
import { LoginComponent } from './login/login.component';
import { TeacherNamePipe } from './pipes/teacher-name.pipe';
import { TeacherDelFormComponent } from './teacher-del-form/teacher-del-form.component';
import { LogoutComponent } from './logout/logout.component';
import { ClassFormComponent } from './class-form/class-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    TimetableComponent,
    LessonFormComponent,
    FirstAComponent,
    FirstBComponent,
    TeacherFormComponent,
    ClassroomFormComponent,
    LoginComponent,
    TeacherNamePipe,
    TeacherDelFormComponent,
    LogoutComponent,
    ClassFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserServiceService,LessonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
