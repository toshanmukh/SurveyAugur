import { Component, Inject, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UUID } from "angular2-uuid";
import {Router} from "@angular/router";
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {MailDetails} from "../mailDetails";


@Component({
  selector: 'app-emaildialog',
  templateUrl: './emaildialog.component.html',
  styleUrls: ['./emaildialog.component.css']
})
export class EmaildialogComponent implements OnInit {
  surveyUrl:string="";
  surveyId:UUID;

  mailDetails=new MailDetails();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public http:HttpClient,public router:Router){
    this.surveyUrl=data.surveyurl;
    this.surveyId=data.surveyId
  }
  ngOnInit(): void {

  }
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  mailId: string[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.mailId.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(mail:string): void {
    const index = this.mailId.indexOf(mail);

    if (index >= 0) {
      this.mailId.splice(index, 1);
    }
  }

  sendMailIds(data){
    console.log(data.message)
    let url="/surveyengine/api/v1/surveys/"+this.surveyId+"/share";
    console.log(url)
    this.mailDetails.mailIds=this.mailId;
    console.log(this.mailDetails.mailIds)
    this.mailDetails.message=data.message;
    console.log(this.mailDetails.message)
      console.log(this.mailDetails)

    this.http.post(url,this.mailDetails).pipe(catchError(this.handleError)).subscribe((data) => {

    console.log(data)
    console.log("After post")
    console.log(this.mailDetails)
    },(error) => {
            console.log(error);

              this.router.navigateByUrl('/error',{state: {errorCode:error}})
            })


  }

  handleError(error:HttpErrorResponse) {
      return throwError(error.status)
    }

}
