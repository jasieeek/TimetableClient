import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Lesson} from '../model/lesson';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private timetableUrl: string;

  constructor(private http: HttpClient) {
    this.timetableUrl = 'http://localhost:8080/timetable';
  }

  public findAll(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.timetableUrl);
  }

  public save(lesson: Lesson) {
    return this.http.post<User>(this.timetableUrl, lesson);
  }

}
