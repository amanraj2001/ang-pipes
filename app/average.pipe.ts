import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let sum = 0
    let avg=value.length
    for(let i = 0;i<value.length;i++){
      sum=sum+value[i]
    }
    return sum/avg;
  }

}
