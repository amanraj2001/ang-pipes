import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom fvvwesc';


  data=[
    {id:0,name:'aman'},
    {id:1,name:'rajput'}
  ]
newdata:any
  onc(element:any){
    console.log(element.target.value );
    // if()
    if(element.target.value==this.data.findIndex((x:any)=>x.id==element.target.value)){

        this.newdata=this.data[element.target.value]
        console.log(this.newdata);


  }
}
}
