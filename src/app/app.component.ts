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
              private authService: AuthenticationService){
    this.title = 'Timetable';
    this.titleSideBar = 'Find:';
  }

  toTimetableByClassName(className: String){
    this.router.navigate(['/timetable/classname', className]);
  }
  toTimetableByTeacherName(teacherName: String, teacherSurname: String){
    let tmpTeacher: String = "";
    tmpTeacher += teacherName.toString();
    tmpTeacher += "-";
    tmpTeacher += teacherSurname.toString();
    this.router.navigate(['/timetable/teacher', tmpTeacher]);
  }
  toTimetableByClassroomName(classroomName: String){
    this.router.navigate(['/timetable/classroom', classroomName]);
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
