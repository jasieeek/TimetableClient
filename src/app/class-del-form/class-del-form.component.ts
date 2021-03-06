import { Component, OnInit } from '@angular/core';
import {Classroom} from '../model/classroom';
import {ActivatedRoute, Router} from '@angular/router';
import {LessonService} from '../service/lesson.service';
import {Class} from '../model/class';

@Component({
  selector: 'app-class-del-form',
  templateUrl: './class-del-form.component.html',
  styleUrls: ['./class-del-form.component.css']
})
export class ClassDelFormComponent implements OnInit {

  classes: Class[];
  classId: String;

  constructor(private route: ActivatedRoute, private router: Router, private lessonService: LessonService) {
  }

  onSubmit() {
    this.lessonService.deleteClass(this.classId).subscribe( result => this.goToCheck())
  }

  goToCheck(){
    location.assign('/check');
  }

  ngOnInit() {
    this.lessonService.findAllClasses().subscribe( data => {
      this.classes = data;
    });
  }
}
