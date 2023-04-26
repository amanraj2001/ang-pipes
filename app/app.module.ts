import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CelsiusPipe } from './celsius.pipe';
import { RomanPipe } from './roman.pipe';
import { UppercasePipe } from './uppercase.pipe';
import { TwoparamentePipe } from './twoparamente.pipe';
import { LargestnumPipe } from './largestnum.pipe';
import { LongeststringPipe } from './longeststring.pipe';
import { AveragePipe } from './average.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CelsiusPipe,
    RomanPipe,
    UppercasePipe,
    TwoparamentePipe,
    LargestnumPipe,
    LongeststringPipe,
    AveragePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
