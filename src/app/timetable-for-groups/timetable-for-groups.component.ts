import { Component, OnInit } from '@angular/core';
import {Lesson} from '../model/lesson';
import {LessonService} from '../service/lesson.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-timetable-for-groups',
  templateUrl: './timetable-for-groups.component.html',
  styleUrls: ['./timetable-for-groups.component.css']
})
export class TimetableForGroupsComponent implements OnInit {

  className: String;
  tmpLessonsByClassName: Lesson[] = Array();

  constructor(private route: ActivatedRoute, private router: Router, private lessonService: LessonService) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.className = params['id']; // (+) converts string 'id' to a number
    });
    console.log(this.className);

    this.lessonService.findLessonsByClassName(this.className).subscribe( data => {
      this.tmpLessonsByClassName = data;
      console.log(data);
    });
  }

}
