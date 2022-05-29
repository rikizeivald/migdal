import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'correctPhone'
})
export class CorrectPhonePipe implements PipeTransform {
  transform(value:number):string{
    if (value==0){
      return " ";
    }
    let newStr:string;
    newStr=value.toString();
    console.log(value)
    newStr="0"+newStr.substring(0, 2) + "-" + newStr.substring(2, newStr.length);
    return newStr;
  }
}
