import {Component, OnInit} from '@angular/core';
import {Lesson} from './model/lesson';
import {LessonService} from './service/lesson.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string;
  titleSideBar: string;
  classes: string[];

  constructor(private lessonService: LessonService){
    this.title = 'Timetable';
    this.titleSideBar = 'Find:';
  }

  ngOnInit(): void {
    this.lessonService.findAllClasses().subscribe(data => {
      this.classes = data;
    });

  }
}
