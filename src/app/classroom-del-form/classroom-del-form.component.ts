import { Component, OnInit } from '@angular/core';
import {Teacher} from '../model/teacher';
import {ActivatedRoute, Router} from '@angular/router';
import {LessonService} from '../service/lesson.service';
import {Classroom} from '../model/classroom';

@Component({
  selector: 'app-classroom-del-form',
  templateUrl: './classroom-del-form.component.html',
  styleUrls: ['./classroom-del-form.component.css']
})
export class ClassroomDelFormComponent implements OnInit {
  classrooms: Classroom[];
  classroomId: String;

  constructor(private route: ActivatedRoute, private router: Router, private lessonService: LessonService) {
  }

  onSubmit() {
    console.log(this.classroomId);
    this.lessonService.deleteClassroom(this.classroomId).subscribe( result => this.goToCheck())
  }

  goToCheck(){
    location.assign('/check');
  }

  ngOnInit() {
    this.lessonService.findAllClassrooms().subscribe( data => {
      this.classrooms = data;
    });
  }
}
