import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman'
})
export class RomanPipe implements PipeTransform {

  transform(num: number,ans:string, ...args: unknown[]): any {
   while(num!=0){

     if(num>=10){
       ans=ans+'x'
      num=num-10
    }
    else if(num==9){
      ans=ans+'ix'
      num=num-9
    }
    else if(num<9 && num>=5){
      ans=ans+'v'
      num=num-5
    }
    else if(num==4){
      ans=ans+'iv'
      num=num-4
    }
    else if(num<4){
      ans=ans+'i'
      num--;
    }
  }
    return ans;
  }

}
