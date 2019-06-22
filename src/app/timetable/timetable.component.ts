import { Component, OnInit } from '@angular/core';
import {Lesson} from '../model/lesson';


@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent {
  lessons: Lesson[];


  constructor() {
  }

}
