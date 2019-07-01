import {Component, OnInit} from '@angular/core';
import {LessonService} from './service/lesson.service';
import {Class} from './model/class';
import {Teacher} from './model/teacher';
import {Classroom} from './model/classroom';
import {AuthenticationService} from './service/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string;
  titleSideBar: string;
  classes: Class[];
  teachers: Teacher[];
  classrooms: Classroom[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private lessonService: LessonService,
              private authService: AuthenticationService) {
    this.title = 'Timetable';
    this.titleSideBar = 'Find:';
  }

  // tslint:disable-next-line:ban-types
  toTimetableByClassName(className: String) {
    // this.router.navigate(['/timetable/classname', className]);
    // @ts-ignore
    location.assign(['timetable/classname/' + className]);
  }
  // tslint:disable-next-line:ban-types
  toTimetableByTeacherName(teacherName: String, teacherSurname: String) {
    // tslint:disable-next-line:ban-types
    let tmpTeacher: String = '';
    tmpTeacher += teacherName.toString();
    tmpTeacher += '-';
    tmpTeacher += teacherSurname.toString();
    // this.router.navigate(['/timetable/teacher', tmpTeacher]);
    // @ts-ignore
    location.assign(['timetable/teacher/' + tmpTeacher]);
  }
  // tslint:disable-next-line:ban-types
  toTimetableByClassroomName(classroomName: String) {
    // this.router.navigate(['/timetable/classroom', classroomName]);
    // @ts-ignore
    location.assign(['timetable/classroom/' + classroomName]);
  }

  ngOnInit(): void {
    this.lessonService.findAllClasses().subscribe(data => {
      this.classes = data;
    });
    this.lessonService.findAllClassrooms().subscribe(data => {
      this.classrooms = data;
    });
    this.lessonService.findAllTeachers().subscribe(data => {
      this.teachers = data;
    });
  }
}
