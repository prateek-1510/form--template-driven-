import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  // onSubmit(form:NgForm)
  // {
  //   console.log(form);
  //
  // }
  
  onSubmit()
  {
    console.log(this.formElement);
  }

}
