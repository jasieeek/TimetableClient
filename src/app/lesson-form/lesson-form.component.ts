import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Lesson} from '../model/lesson';
import {LessonService} from '../service/lesson.service';

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.css']
})
export class LessonFormComponent implements OnInit {

  lesson: Lesson;

  constructor(private route: ActivatedRoute, private router: Router, private lessonService: LessonService) {
    this.lesson = new Lesson();
  }

  onSubmit() {
    this.lessonService.save(this.lesson).subscribe(result => this.gotoLessonList());
  }

  gotoLessonList() {
    this.router.navigate(['/timetable']);
  }

  ngOnInit() {
  }
}
