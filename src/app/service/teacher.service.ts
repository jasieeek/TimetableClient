import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Teacher} from '../model/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  // private teacherUrl: string;
  //
  // constructor(private http: HttpClient) {
  //   this.teacherUrl = 'http://localhost:8080/teacher';
  // }
  //
  // public findAllTeachers(): Observable<Teacher[]> {
  //   return this.http.get<Teacher[]>(this.teacherUrl);
  // }
  //
  // public save(teacher: Teacher) {
  //   return this.http.post<Teacher>(this.teacherUrl, teacher);
  // }

}
