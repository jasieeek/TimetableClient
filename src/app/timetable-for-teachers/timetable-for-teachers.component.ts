import { Component, OnInit } from '@angular/core';
import {Lesson} from '../model/lesson';
import {ActivatedRoute, Router} from '@angular/router';
import {LessonService} from '../service/lesson.service';


@Component({
  selector: 'app-timetable-for-teachers',
  templateUrl: './timetable-for-teachers.component.html',
  styleUrls: ['./timetable-for-teachers.component.css']
})
export class TimetableForTeachersComponent implements OnInit {

  teacherName: String;
  tmpLessonsByTeacherName: Lesson[] = Array();

  constructor(private route: ActivatedRoute, private router: Router, private lessonService: LessonService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.teacherName = params['id']; // (+) converts string 'id' to a number
    });
    console.log(this.teacherName);

    this.lessonService.findLessonsByTeacherName(this.teacherName).subscribe( data => {
      this.tmpLessonsByTeacherName = data;
      console.log(data);
    });
  }

}
