import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string;
  titleSideBar: string;

  constructor(){
    this.title = 'Timetable';
    this.titleSideBar = 'Find:';
  }

  ngOnInit(): void {

  }
}
