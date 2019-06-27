import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Lesson} from '../model/lesson';
import {LessonService} from '../service/lesson.service';
import {Class} from '../model/class';
import {Classroom} from '../model/classroom';
import {Teacher} from '../model/teacher';

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.css']
})
export class LessonFormComponent implements OnInit {

  lesson: Lesson;
  classes: Class[];
  classrooms: Classroom[];
  teachers: Teacher[];

  constructor(private route: ActivatedRoute, private router: Router, private lessonService: LessonService) {
    this.lesson = new Lesson();
  }

  onSubmit() {
    this.lessonService.saveLesson(this.lesson).subscribe(result => this.gotoLessonList());
  }

  gotoLessonList() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.lessonService.findAllClasses().subscribe(data => {
      this.classes = data;
    });
    this.lessonService.findAllClassrooms().subscribe( data => {
      this.classrooms = data;
    });
    this.lessonService.findAllTeachers().subscribe( data => {
      this.teachers = data;
    });
  }
}
