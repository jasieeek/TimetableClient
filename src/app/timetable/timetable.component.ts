import {Component, Input, OnInit} from '@angular/core';
import {Lesson} from '../model/lesson';
import {LessonService} from '../service/lesson.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit{

  // @Input()
  // lesson: Lesson[] = [
  //   new Lesson('Matma', 'Kamil Jasiak', '111', '1A', 'MONDAY', 2 ),
  //   new Lesson('Historia', 'Adrianna Matalowska', '120', '1A', 'MONDAY', 4 )
  // ];
  lessons: Lesson[];
  monday: Lesson[];
  tuesday: Lesson[];
  wednesday: Lesson[];
  thursday: Lesson[];
  friday: Lesson[];

  constructor(private lessonService: LessonService) {
  }

  firstA(){
    console.log("wyswietlam plan");
  }

  ngOnInit(){
    //jak przypisac zmiennej lessons wartosci z lessons z app.component.ts

  }
}
