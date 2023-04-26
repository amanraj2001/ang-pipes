import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {

    let x = value.split(' ');

    for(var i =0; i<x.length;i++){
      x[i]=x[i].charAt(0).toUpperCase()+x[i].substring(1)
    }
    let z = x.join(' ')
    return z  ;
  }

}
