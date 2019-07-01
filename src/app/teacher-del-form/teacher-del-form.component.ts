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
  teacherId: String;

  constructor(private route: ActivatedRoute, private router: Router, private lessonService: LessonService) {
  }

  onSubmit() {
    console.log('ID:' + this.teacherId)
    this.lessonService.deleteTeacher(this.teacherId).subscribe( result  => this.goToCheck());
  }

  goToCheck(){
    location.assign('/check');
  }

  ngOnInit() {
    this.lessonService.findAllTeachers().subscribe( data => {
      this.teachers = data;
    });
  }
}
