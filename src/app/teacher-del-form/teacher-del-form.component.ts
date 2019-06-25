import { Component, OnInit } from '@angular/core';
import {Teacher} from '../model/teacher';
import {ActivatedRoute, Router} from '@angular/router';
import {LessonService} from '../service/lesson.service';

@Component({
  selector: 'app-teacher-del-form',
  templateUrl: './teacher-del-form.component.html',
  styleUrls: ['./teacher-del-form.component.css']
})
export class TeacherDelFormComponent implements OnInit {

  teachers: Teacher[];
  teacherId: number;

  constructor(private route: ActivatedRoute, private router: Router, private lessonService: LessonService) {
  }

  onSubmit() {
    console.log(this.teachers[this.teacherId].id);
    console.log(this.teachers[this.teacherId].name);
    console.log(this.teachers[this.teacherId].surname);
    this.lessonService.deleteTeacher(parseInt(this.teachers[this.teacherId].id)).subscribe(result => this.gotoLessonList());
  }

  gotoLessonList() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.lessonService.findAllTeachers().subscribe( data => {
      this.teachers = data;
    });
  }
}
