import { Component, OnInit } from '@angular/core';
import {Lesson} from '../model/lesson';
import {ActivatedRoute, Router} from '@angular/router';
import {LessonService} from '../service/lesson.service';

@Component({
  selector: 'app-timetable-for-classrooms',
  templateUrl: './timetable-for-classrooms.component.html',
  styleUrls: ['./timetable-for-classrooms.component.css']
})
export class TimetableForClassroomsComponent implements OnInit {

  classroomName: String;
  tmpLessonsByClassroomName: Lesson[] = Array();

  constructor(private route: ActivatedRoute, private router: Router, private lessonService: LessonService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.classroomName = params['id']; // (+) converts string 'id' to a number
    });
    console.log(this.classroomName);

    this.lessonService.findLessonsByClassroomName(this.classroomName).subscribe( data => {
      this.tmpLessonsByClassroomName = data;
      console.log(data);
    });
  }

}
