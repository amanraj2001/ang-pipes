import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longeststring'
})
export class LongeststringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let max=value[0].length
      for(let i = 0;i<value.length;i++){
        if(value[i].length>max)
        max=value[i].length
        var y=max
      }
      var z= y

      return z
  }

}
