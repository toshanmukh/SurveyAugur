import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataModule } from '../../data/data.module';
import { ActiveSurveys } from '../model/activesurvey';
import { ASQuestions } from '../model/asquestion';
import { QuestionResp } from '../model/questionresp';
import { Responses } from '../model/response';
import { SurveyService } from './survey.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  active: ActiveSurveys = new ActiveSurveys();
  tagComp: string = "";
  questRes: QuestionResp[] = []
  questionList: ASQuestions[] = []
  respQuestion: Responses = new Responses()
  constructor(private http: HttpClient, private router: ActivatedRoute, private survey: SurveyService) { }

  ngOnInit(): void {
    this.http.get("/surveyengine/api/v1/surveys/" + this.router.snapshot.params.id).subscribe((data: any) => {
      console.log(data["result"])
      this.active = data["result"]
      for (let i = 0; i < this.active.tags.length; i++) {
        this.tagComp = this.tagComp + " " + this.active.tags[i]
      }
      this.questionList = this.active.questions;
      console.log(this.questionList);
      this.survey.activeTime.next(this.active.activeTime);
    })

  }
  save(rinfo: NgForm) {
    console.log(rinfo["value"])
    let ans = rinfo["value"]
    this.respQuestion.questions = [];
    for (let i = 1; i < this.questionList.length; i++) {

      let res: QuestionResp = new QuestionResp()
      res.questionBody = this.questionList[i].questionBody
      if (this.questionList[i].questionType.toString() === "MULTIPLE_SELECT") {
        res.answer = ans[res.questionBody]
      } else if (this.questionList[i].questionType.toString() === "SINGLE_SELECT") {
        res.answer = ans[res.questionBody]
      } else {
        res.answer = ans[res.questionBody]
      }
      res.options = this.questionList[i].options;
      this.questRes.push(res)

    }

    this.respQuestion.questions = this.questRes;
    this.respQuestion.createdOn = new Date();
    this.respQuestion.surveyId = this.active.surveyId;
    console.log(this.respQuestion)
    this.http.post("/surveyengine/api/v1/responses", this.respQuestion).subscribe((data) => {
      console.log(data)
    });


  }

}
