import { Component, OnInit } from '@angular/core';
import {Teacher} from '../model/teacher';
import {ActivatedRoute, Router} from '@angular/router';
import {TeacherService} from '../service/teacher.service';
import {LessonService} from '../service/lesson.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {

  teacher: Teacher;

  constructor(private route: ActivatedRoute, private router: Router, private lessonService: LessonService) {
    this.teacher = new Teacher();
  }

  onSubmit() {
    this.lessonService.saveTeacher(this.teacher).subscribe(result => this.gotoLessonList());
  }

  gotoLessonList() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
