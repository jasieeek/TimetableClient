import { Component, OnInit } from '@angular/core';
import {Lesson} from '../model/lesson';
import {LessonService} from '../service/lesson.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit{

  lessons: Lesson[];

  constructor(private lessonService: LessonService, private http: HttpClient) {
  }

  firstA(){
    console.log("wyswietlam plan");
  }

  ngOnInit(): void {
    //jak przypisac zmiennej lessons wartosciz komponentu rodzica
    //teraz sa to wszystkie lekcje z bazy
    this.lessonService.findAllLessons().subscribe( data => {
      this.lessons = data;
    });
    //tu mozna by skorzystac z ostatniej czesci adresu i zaleznie od niego
    //pobrac lekcje z bazy uzywajac funkcji gdzie parametrami beda dane
    //z ostatniej czesci adresu
  }

}
