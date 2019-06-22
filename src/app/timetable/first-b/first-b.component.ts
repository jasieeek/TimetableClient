import { Component, OnInit } from '@angular/core';
import {Lesson} from '../../model/lesson';
import {LessonService} from '../../service/lesson.service';

@Component({
  selector: 'app-first-b',
  templateUrl: '../timetable.component.html',
  styleUrls: ['../timetable.component.css']
})

export class FirstBComponent implements OnInit {

  lessons: Lesson[];

  constructor(private lessonService: LessonService) { }

  ngOnInit() {
    this.lessonService.findAllLessons().subscribe(data => {
      this.lessons = data;
    });
  }

}
