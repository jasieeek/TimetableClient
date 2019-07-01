import { Component, OnInit } from '@angular/core';
import {Classroom} from '../model/classroom';
import {ActivatedRoute, Router} from '@angular/router';
import {LessonService} from '../service/lesson.service';
import {Class} from '../model/class';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {

  class: Class;

  constructor(private route: ActivatedRoute, private router: Router, private lessonService: LessonService) {
    this.class = new Class();
  }

  onSubmit() {
    this.lessonService.saveClass(this.class).subscribe(result => this.gotoLessonList());
  }

  gotoLessonList() {
    location.assign('/check');
  }

  ngOnInit() {
  }
}
