import {Component, OnInit} from '@angular/core';
import {Lesson} from './model/lesson';
import {LessonService} from './service/lesson.service';
import {Class} from './model/class';
import {Teacher} from './model/teacher';
import {Classroom} from './model/classroom';
import {TeacherService} from './service/teacher.service';

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


  constructor(private lessonService: LessonService){
    this.title = 'Timetable';
    this.titleSideBar = 'Find:';
  }

  ngOnInit(): void {
    this.lessonService.findAllClasses().subscribe(data => {
      this.classes = data;
    })
    this.lessonService.findAllClassrooms().subscribe(data => {
      this.classrooms = data;
    })
    this.lessonService.findAllTeachers().subscribe(data => {
      this.teachers = data;
    })
  }
}
