import { Component, OnInit } from '@angular/core';
import {Lesson} from '../model/lesson';
import {LessonService} from '../service/lesson.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  lessons: Lesson[];
  hours = ["8:00-8:45",
    "8:55-9:40",
    "9:50-10:35",
    "10:50-11:55",
    "11:45-12:30",
    "12:40-13:25",
    "13:35-14:20",
    "14:40-15:25",
    "15:35-16:20",
  ];


  constructor(private lessonService: LessonService) {
  }

  ngOnInit() {
    this.lessonService.findAllLessons().subscribe(data => {
      this.lessons = data;
    });
  }
}
