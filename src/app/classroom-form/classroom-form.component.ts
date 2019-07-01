import { Component, OnInit } from '@angular/core';
import {Classroom} from '../model/classroom';
import {LessonService} from '../service/lesson.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-classroom-form',
  templateUrl: './classroom-form.component.html',
  styleUrls: ['./classroom-form.component.css']
})
export class ClassroomFormComponent implements OnInit {

  classroom: Classroom;

  constructor(private route: ActivatedRoute, private router: Router, private lessonService: LessonService) {
    this.classroom = new Classroom();
  }

  onSubmit() {
    this.lessonService.saveClassroom(this.classroom).subscribe(result => this.gotoLessonList());
  }

  gotoLessonList() {
    location.assign('/check');
  }

  ngOnInit() {
  }

}
