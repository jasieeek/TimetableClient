import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teacherName'
})
export class TeacherNamePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    var splited = value.split(" ", 2);
    if (splited.length == 2)
      return splited[0].charAt(0) + "." + splited[1];
    else
      return splited[0].charAt(0) + "." + splited[1] + "-" + splited[2];


  }

}
