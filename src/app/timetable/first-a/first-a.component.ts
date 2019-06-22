import { Component, OnInit } from '@angular/core';
import {Lesson} from '../../model/lesson';
import {LessonService} from '../../service/lesson.service';

@Component({
  selector: 'app-first-a',
  templateUrl: './first-a.component.html',
  styleUrls: ['./first-a.component.css']
})
export class FirstAComponent implements OnInit {

  lessons: Lesson[];

  constructor(private lessonService: LessonService) { }

  ngOnInit() {
    this.lessonService.findAllLessons().subscribe(data => {
      this.lessons = data;
      console.log(this.lessons);
    });
  }

}
