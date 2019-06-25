import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent {


  constructor() {
  }

  firstA(){
    console.log("wyswietlam plan");
  }
}
