import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoparamente'
})
export class TwoparamentePipe implements PipeTransform {

  transform(value: any, value2:any): any {
    let x = value-(value*value2)/100
    return x;
  }

}
