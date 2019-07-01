import { Component, OnInit } from '@angular/core';
import {Classroom} from '../model/classroom';
import {ActivatedRoute, Router} from '@angular/router';
import {LessonService} from '../service/lesson.service';
import {Lesson} from '../model/lesson';

@Component({
  selector: 'app-lesson-del-form',
  templateUrl: './lesson-del-form.component.html',
  styleUrls: ['./lesson-del-form.component.css']
})
export class LessonDelFormComponent implements OnInit {

  lessons: Lesson[];
  lessonId: String;

  constructor(private route: ActivatedRoute, private router: Router, private lessonService: LessonService) {
  }

  onSubmit() {
    console.log(this.lessonId);
    this.lessonService.deleteLesson(this.lessonId).subscribe( result => this.goToCheck())
  }

  goToCheck(){
    location.assign('/check');
  }

  ngOnInit() {
    this.lessonService.findAllLessons().subscribe( data => {
      this.lessons = data;
    });
  }
}
