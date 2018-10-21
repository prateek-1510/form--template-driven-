import { BrowserModule } from '@angular/platform-browser';
import { NgModule,PipeTransform } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { SaveReplyService } from './savereplies.service';


@NgModule({
  declarations: [
    AppComponent,ShortenPipe
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [SaveReplyService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
