import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {

  transform(value: number,unit:string, ...args: unknown[]): any {
    if(unit='C-to-F'){
      var temp = (value*9)/5 +32
      return temp;
    }
    // return null;
  }

}
