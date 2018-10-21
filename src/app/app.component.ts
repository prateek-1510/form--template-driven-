import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SaveReplyService } from './savereplies.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-one';
  @ViewChild('f') formElement:NgForm;
  defaultSecurityQues="teacher";
  securityQuesReply:string;
  genders=['male','female'];
  currentDate=new Promise(
    (resolve,reject)=>{
      setTimeout(()=>
      {
        resolve(new Date())
      },3000);
    }
  );
  constructor(private saveRepliesService:SaveReplyService)
  {


  }
  saveReply()
  {
    console.log(this.saveRepliesService);
    this.saveRepliesService.saveReplies(this.securityQuesReply)
    .subscribe((resolve)=>
  {
    console.log(resolve);
  }
  ,
  (reject)=>
  {
    console.log(reject);
  }
);

  }


  // onSubmit(form:NgForm)
  // {
  //   console.log(form);
  //
  // }

  onSubmit()
  {
    console.log(this.formElement);
    //saveReply();
    this.formElement.reset();
  }

}
