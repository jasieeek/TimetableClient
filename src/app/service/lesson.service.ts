import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Lesson} from '../model/lesson';
import {Class} from '../model/class';
import {Teacher} from '../model/teacher';
import {Classroom} from '../model/classroom';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private timetableUrl: string;
  private properLessonsUrl: string;
  private groupsUrl: string;
  private teachersUrl: string;
  private teachersDistinctUrl: string;
  private delTeachersUrl: string;
  private classroomsUrl: string;

  constructor(private http: HttpClient) {
    this.timetableUrl = 'http://localhost:8080/timetable';
    this.properLessonsUrl = 'http://localhost:8080/timetable/classname'
    this.groupsUrl = 'http://localhost:8080/';
    this.teachersUrl = 'http://localhost:8080/teacher';
    this.teachersDistinctUrl = 'http://localhost:8080/teachers';
    this.delTeachersUrl = 'http://localhost:8080/delteacher';
    this.classroomsUrl = 'http://localhost:8080/classroom';
  }

  public findProperLessons(className: String): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.properLessonsUrl + className);
  }

  public findAllLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.timetableUrl);
  }

  public findAllClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.groupsUrl);
  }

  public saveLesson(lesson: Lesson) {
    return this.http.post<Lesson>(this.timetableUrl, lesson);
  }

  public findAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.teachersUrl);
  }
  public findDistinctTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.teachersDistinctUrl);
  }

  public saveTeacher(teacher: Teacher) {
    return this.http.post<Teacher>(this.teachersUrl, teacher);
  }

  public deleteTeacher(id: number){
    return this.http.post<number>(this.delTeachersUrl, id);
  }

  public findAllClassrooms(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(this.classroomsUrl);
  }

  public saveClassroom(classroom: Classroom){
    return this.http.post<Classroom>(this.classroomsUrl, classroom);
  }



}
