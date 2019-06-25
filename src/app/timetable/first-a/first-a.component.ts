import {Component, OnInit} from '@angular/core';
import {Lesson} from '../../model/lesson';
import {LessonService} from '../../service/lesson.service';
import {WeekDay} from '@angular/common';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-first-a',
  templateUrl: './first-a.component.html',
  styleUrls: ['./first-a.component.css']
})
export class FirstAComponent implements OnInit {

  lessons: Lesson[];
  monday: Lesson[] = Array();
  tuesday: Lesson[];


  constructor(private lessonService: LessonService) { }

  public groupingLessons(lessons: Lesson[]) {
    // for (let lesson of this.lessons){
    //    switch (lesson.dayOfWeek) {
    //      case WeekDay.Monday: {
    //        this.monday[i] = lesson;
    //      }
    //    }
    // }
    // for (var i = 0; i < this.lessons.length; i++){
    //   if (this.lessons[i].dayOfWeek == WeekDay.Monday) {
    //     this.monday[this.lessons[i].sequence] = this.lessons[i];
    //   }
    // }
    // let array: Lesson[];
    // for (let index = 0; index < lessons.length; index++) {
    //   if (lessons[index].dayOfWeek == WeekDay.Monday)
      // array[index] = this.lessons[index];
    //     console.log(lessons);
    // }
    // console.log(array[0]);
    // for (let index = 0; index < this.lessons.length; index++){
    //  this.monday[index].id = index.toString();
    //  this.monday[index].name = this.lessons[index].name;
    //  this.monday[index].teacherName = this.lessons[index].teacherName;
    //  this.monday[index].classroomNumber = this.lessons[index].classroomNumber;
    //  this.monday[index].className = this.lessons[index].className;
    //  this.monday[index].dayOfWeek = this.lessons[index].dayOfWeek;
    //  this.monday[index].sequence = this.lessons[index].sequence;
    // }
    // console.log(this.lessons);
    // console.log(this.monday);


  }

  ngOnInit() {
    this.lessonService.findAllLessons().subscribe(data => {
      this.lessons = data;
      //this.monday = data;
      console.log(this.lessons);

      for (let index = 0; index < this.lessons.length; index++){

        console.log(this.lessons[index].dayOfWeek);
        if (this.lessons[index].dayOfWeek == "MONDAY"){
          var tmpLesson = this.lessons[index];
          tmpLesson.id = index.toString();
          tmpLesson.name = this.lessons[index].name;
          tmpLesson.teacherName = this.lessons[index].teacherName;
          tmpLesson.classroomNumber = this.lessons[index].classroomNumber;
          tmpLesson.className = this.lessons[index].className;
          tmpLesson.dayOfWeek = this.lessons[index].dayOfWeek;
          tmpLesson.sequence = this.lessons[index].sequence;

          // for (let i = 0; i < 8; i++) {
          //   this.monday[i] = new Lesson();
          //   console.log("Dodalem pusta lekcje");
          // }

          // this.monday[tmpLesson.sequence] = tmpLesson;
          this.monday.push(tmpLesson);
          //zrob pushem i potem ngIf(odnosnie sekwencji)
          console.log("Dodalem lekcje");
          console.log(tmpLesson);
        }
        else
          console.log("Nie ma lekcji z poniedzialku");
      }
    });

  }
}
