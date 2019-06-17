import {WeekDay} from '@angular/common';

export class Lesson {
  id: string;
  name: string;
  teacherName: string;
  classroomNumber: string;
  className: string;
  dayOfWeek: WeekDay;
  sequence: number;
}
