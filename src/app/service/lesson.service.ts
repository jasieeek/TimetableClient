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
  private classLessonsUrl: string;
  private teacherLessonsUrl: string;
  private classroomLessonsUrl: string;
  private groupsUrl: string;
  private delLessonsUrl: string;
  private teachersUrl: string;
  private teachersDistinctUrl: string;
  private delTeachersUrl: string;
  private classroomsUrl: string;
  private delClassroomsUrl: string;
  private classesUrl: string;
  private delClassesUrl: string;

  constructor(private http: HttpClient) {
    this.timetableUrl = 'http://localhost:8080/timetable';
    this.classLessonsUrl = 'http://localhost:8080/timetable/classname'
    this.teacherLessonsUrl = 'http://localhost:8080/timetable/teacher'
    this.classroomLessonsUrl = 'http://localhost:8080/timetable/classroom'
    this.groupsUrl = 'http://localhost:8080/';
    this.delLessonsUrl = 'http://localhost:8080/timetable/del';
    this.teachersUrl = 'http://localhost:8080/teacher';
    this.teachersDistinctUrl = 'http://localhost:8080/teachers';
    this.delTeachersUrl = 'http://localhost:8080/teacher/del';
    this.classroomsUrl = 'http://localhost:8080/classroom';
    this.delClassroomsUrl = 'http://localhost:8080/classroom/del';
    this.classesUrl = 'http://localhost:8080/group';
    this.delClassesUrl = 'http://localhost:8080/group/del';
  }

  public findLessonsByClassName(className: String): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.classLessonsUrl + "/" + className);
  }
  public findLessonsByTeacherName(teacherName: String): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.teacherLessonsUrl + "/" + teacherName);
  }
  public findLessonsByClassroomName(classroomName: String): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.classroomLessonsUrl + "/" + classroomName);
  }

  public findAllLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.timetableUrl);
  }

  public findAllClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.classesUrl);
  }

  public saveLesson(lesson: Lesson) {
    return this.http.post<Lesson>(this.timetableUrl, lesson);
  }

  public deleteLesson(id: String){
    return this.http.delete(this.delLessonsUrl + '/' + id);
  }

  public findAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.teachersUrl);
  }

  public saveTeacher(teacher: Teacher) {
    return this.http.post<Teacher>(this.teachersUrl, teacher);
  }

  public deleteTeacher(id: String){
    return this.http.delete(this.delTeachersUrl + '/' + id);
  }

  public findAllClassrooms(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(this.classroomsUrl);
  }

  public saveClassroom(classroom: Classroom){
    return this.http.post<Classroom>(this.classroomsUrl, classroom);
  }

  public deleteClassroom(id: String){
    return this.http.delete(this.delClassroomsUrl + '/' + id);
  }

  public saveClass(group: Class){
    return this.http.post<Class>(this.classesUrl, group);
  }

  public deleteClass(id: String){
    return this.http.delete(this.delClassesUrl + '/' + id);
  }
}
