import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'largestnum'
})
export class LargestnumPipe implements PipeTransform {

  transform(value: any, number: any[]): any {
    // number=[19,5,42,2,77]
    let min=value[0]
    let min2=value[0]
    for(let i=0;i<value.length;i++){
      if(value[i]<min){
        min=value[i]
        min2=value[i+1]
      }
      var z =min
      var t=min2
    }
    return t;
  }

}
