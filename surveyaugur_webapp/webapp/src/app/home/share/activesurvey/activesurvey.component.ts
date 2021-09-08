import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActiveSurveys } from '../../surveys/model/activeSurvey';
import { EmaildialogComponent } from '../emaildialog/emaildialog.component';
import { UUID } from "angular2-uuid";
import { UserinfoService } from '../../../service/userinfo.service';
@Component({
  selector: 'app-activesurvey',
  templateUrl: './activesurvey.component.html',
  styleUrls: ['./activesurvey.component.css']
})
export class ActivesurveyComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name'];
  dataSource:MatTableDataSource<ActiveSurveys>;
  activeSurvey: ActiveSurveys[] = []
  activeById: ActiveSurveys[] = [];

  constructor(private http:HttpClient,private dialog:MatDialog, private user: UserinfoService) { }

  ngOnInit(): void {

      this.http.get("/surveyengine/api/v1/surveys").subscribe((data) => {
        console.log(data["result"])
        this.activeSurvey = data["result"]
        this.getById();

        console.log(this.activeById);

        this.dataSource = new MatTableDataSource<ActiveSurveys>(this.activeById);
      })

  }
  openDialog(urlOfSurvey:string,idSurvey:UUID): void {
  console.log("me")
  console.log(urlOfSurvey)
  console.log(idSurvey)
;    const dialogRef = this.dialog.open(EmaildialogComponent, {
      width: '40%',
      data:{
        surveyurl:urlOfSurvey,
        surveyId: idSurvey
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  getById() {
    for (let i = 0; i < this.activeSurvey.length; i++) {
      if (this.activeSurvey[i].createdBy === this.user.userId) {
        this.activeById.push(this.activeSurvey[i]);
      }
    }
  }

}

