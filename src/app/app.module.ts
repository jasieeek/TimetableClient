import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserServiceService} from './service/user-service.service';
import {LessonService} from './service/lesson.service';
import { LessonFormComponent } from './lesson-form/lesson-form.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { ClassroomFormComponent } from './classroom-form/classroom-form.component';
import { LoginComponent } from './login/login.component';
import { TeacherNamePipe } from './pipes/teacher-name.pipe';
import { TeacherDelFormComponent } from './teacher-del-form/teacher-del-form.component';
import { LogoutComponent } from './logout/logout.component';
import { ClassFormComponent } from './class-form/class-form.component';
import { TimetableForGroupsComponent } from './timetable-for-groups/timetable-for-groups.component';
import { TimetableForTeachersComponent } from './timetable-for-teachers/timetable-for-teachers.component';
import { TimetableForClassroomsComponent } from './timetable-for-classrooms/timetable-for-classrooms.component';
import { ClassDelFormComponent } from './class-del-form/class-del-form.component';
import { ClassroomDelFormComponent } from './classroom-del-form/classroom-del-form.component';
import { LessonDelFormComponent } from './lesson-del-form/lesson-del-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    LessonFormComponent,
    TeacherFormComponent,
    ClassroomFormComponent,
    LoginComponent,
    TeacherNamePipe,
    TeacherDelFormComponent,
    LogoutComponent,
    ClassFormComponent,
    TimetableForGroupsComponent,
    TimetableForTeachersComponent,
    TimetableForClassroomsComponent,
    ClassDelFormComponent,
    ClassroomDelFormComponent,
    LessonDelFormComponent
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
