import { Component,ViewChild,ElementRef } from '@angular/core';
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
  @ViewChild('alertBox') alertB:ElementRef;
  defaultSecurityQues="teacher";
  securityQuesReply:string;
  genders=['male','female'];
  saveReplyFlag:boolean=false;
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
    this.saveReplyFlag=true;
  }
  ,
  (reject)=>
  {
    console.log(reject);
  }
);

  }
  setSaveReplyFlag()
  {
    this.saveReplyFlag=true;
    console.log(this.formElement);
    console.log(this.alertB);

    setTimeout(()=>
    {
      this.alertB.nativeElement.remove();
    },4000);
}



  onSubmit()
  {
    console.log(this.formElement);
    //saveReply();
    this.formElement.reset();
  }

}
