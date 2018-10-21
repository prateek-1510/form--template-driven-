import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class SaveReplyService
{

  constructor(private httpservice:Http)
  {

  }
  saveReplies(replies:any)
  {
      console.log(JSON.stringify("####"+replies));

    return this.httpservice.post('https://form-one-backend.firebaseio.com/data.json',JSON.stringify(replies));
  }


}
