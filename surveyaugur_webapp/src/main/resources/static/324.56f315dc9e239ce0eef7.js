(self.webpackChunksurveyaugur_webapp=self.webpackChunksurveyaugur_webapp||[]).push([[324],{768:(t,e,n)=>{"use strict";n.r(e),n.d(e,{SurveysModule:()=>D});var o=n(8583),r=n(1095),i=n(4655),a=n(2789),c=n(5304),u=n(205),s=n(7716),l=n(1841),d=n(2199),h=n(5939);function p(t,e){1&t&&(s.TgZ(0,"th",13),s._uU(1,"SNo. "),s.qZA())}function m(t,e){if(1&t&&(s.TgZ(0,"td",14),s._uU(1),s.qZA()),2&t){const t=e.index;s.xp6(1),s.hij(" ",t+1," ")}}function v(t,e){1&t&&(s.TgZ(0,"th",13),s._uU(1," SurveyTitle "),s.qZA())}function g(t,e){if(1&t&&(s.TgZ(0,"td",14),s._uU(1),s._UZ(2,"br"),s._uU(3),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.hij(" ",t.surveyTitle,""),s.xp6(2),s.hij("",t.surveyUrl," ")}}function y(t,e){1&t&&(s.TgZ(0,"th",13),s._uU(1," ActivatedOn "),s.qZA())}function f(t,e){if(1&t&&(s.TgZ(0,"td",14),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.hij(" ",t.activatedOn," ")}}function Z(t,e){1&t&&(s.TgZ(0,"th",13),s._uU(1," Actions "),s.qZA())}function w(t,e){1&t&&(s.TgZ(0,"td",14),s.TgZ(1,"button",15),s._uU(2,"Preview"),s.qZA(),s._uU(3,"\xa0\xa0\xa0 "),s.TgZ(4,"button",16),s._uU(5,"DeActivate"),s.qZA(),s.qZA())}function b(t,e){1&t&&s._UZ(0,"tr",17)}function _(t,e){1&t&&s._UZ(0,"tr",18)}function A(t,e){1&t&&(s.TgZ(0,"th",13),s._uU(1,"SNo. "),s.qZA())}function U(t,e){if(1&t&&(s.TgZ(0,"td",14),s._uU(1),s.qZA()),2&t){const t=e.index;s.xp6(1),s.hij(" ",t+1," ")}}function S(t,e){1&t&&(s.TgZ(0,"th",13),s._uU(1," SurveyTitle "),s.qZA())}function C(t,e){if(1&t&&(s.TgZ(0,"td",14),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.hij(" ",t.title," ")}}function x(t,e){1&t&&(s.TgZ(0,"th",13),s._uU(1," CreatedOn "),s.qZA())}function T(t,e){if(1&t&&(s.TgZ(0,"td",14),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.hij(" ",t.createdOn," ")}}function k(t,e){1&t&&(s.TgZ(0,"th",13),s._uU(1," Actions "),s.qZA())}function q(t,e){1&t&&(s.TgZ(0,"td",14),s.TgZ(1,"button",15),s._uU(2,"Preview"),s.qZA(),s._uU(3,"\xa0\xa0\xa0 "),s.TgZ(4,"button",16),s._uU(5,"Activate"),s.qZA(),s.qZA())}function N(t,e){1&t&&s._UZ(0,"tr",17)}function B(t,e){1&t&&s._UZ(0,"tr",18)}const Y=[{path:"",component:(()=>{class t{constructor(t,e,n){this.http=t,this.user=e,this.router=n,this.displayedColumns=["position","name","updates","Actions"],this.activeById=[],this.inactiveSurvey=[],this.activeSurvey=[]}ngOnInit(){this.getInctiveSurveys(),this.getActiveSurveys()}getById(){for(let t=0;t<this.activeSurvey.length;t++)this.activeSurvey[t].createdBy===this.user.userId&&this.activeById.push(this.activeSurvey[t])}getInctiveSurveys(){this.http.get("/surveyauthor/api/v1/surveys/users/"+this.user.userId).pipe((0,c.K)(this.handleError)).subscribe(t=>{this.inactiveSurvey=[],this.inactiveSurvey=t.result,console.log(t),console.log(this.inactiveSurvey),this.dataSource1=new a.by(this.inactiveSurvey)},t=>{console.log(t),this.router.navigateByUrl("/error",{state:{errorCode:t}})})}getActiveSurveys(){this.http.get("/surveyengine/api/v1/surveys").pipe((0,c.K)(this.handleError)).subscribe(t=>{console.log(t.result),this.activeSurvey=t.result,console.log(this.activeSurvey),this.activeById=[],this.getById(),console.log(this.activeById),this.dataSource=new a.by(this.activeById)},t=>{console.log(t),this.router.navigateByUrl("/error",{state:{errorCode:t}})})}handleError(t){return(0,u._)(t.status)}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(l.eN),s.Y36(d._),s.Y36(i.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-surveys"]],decls:40,vars:6,consts:[[1,"sub-heading"],[2,"width","100%"],["label","Active Surveys"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","","class","tableHeader",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","updates"],["matColumnDef","Actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["label","InActive Surveys"],["mat-header-cell","",1,"tableHeader"],["mat-cell",""],["mat-raised-button","","color","accent",2,"width","6em"],["mat-raised-button","","color","primary",2,"width","7em"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(s.TgZ(0,"p",0),s._uU(1,"Surveys"),s.qZA(),s._UZ(2,"hr",1),s.TgZ(3,"mat-tab-group"),s.TgZ(4,"mat-tab",2),s._UZ(5,"br"),s._UZ(6,"br"),s.TgZ(7,"table",3),s.ynx(8,4),s.YNc(9,p,2,0,"th",5),s.YNc(10,m,2,1,"td",6),s.BQk(),s.ynx(11,7),s.YNc(12,v,2,0,"th",5),s.YNc(13,g,4,2,"td",6),s.BQk(),s.ynx(14,8),s.YNc(15,y,2,0,"th",5),s.YNc(16,f,2,1,"td",6),s.BQk(),s.ynx(17,9),s.YNc(18,Z,2,0,"th",5),s.YNc(19,w,6,0,"td",6),s.BQk(),s.YNc(20,b,1,0,"tr",10),s.YNc(21,_,1,0,"tr",11),s.qZA(),s.qZA(),s.TgZ(22,"mat-tab",12),s._UZ(23,"br"),s._UZ(24,"br"),s.TgZ(25,"table",3),s.ynx(26,4),s.YNc(27,A,2,0,"th",5),s.YNc(28,U,2,1,"td",6),s.BQk(),s.ynx(29,7),s.YNc(30,S,2,0,"th",5),s.YNc(31,C,2,1,"td",6),s.BQk(),s.ynx(32,8),s.YNc(33,x,2,0,"th",5),s.YNc(34,T,2,1,"td",6),s.BQk(),s.ynx(35,9),s.YNc(36,k,2,0,"th",5),s.YNc(37,q,6,0,"td",6),s.BQk(),s.YNc(38,N,1,0,"tr",10),s.YNc(39,B,1,0,"tr",11),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(7),s.Q6J("dataSource",e.dataSource),s.xp6(13),s.Q6J("matHeaderRowDef",e.displayedColumns),s.xp6(1),s.Q6J("matRowDefColumns",e.displayedColumns),s.xp6(4),s.Q6J("dataSource",e.dataSource1),s.xp6(13),s.Q6J("matHeaderRowDef",e.displayedColumns),s.xp6(1),s.Q6J("matRowDefColumns",e.displayedColumns))},directives:[h.SP,h.uX,a.BZ,a.w1,a.fO,a.Dz,a.as,a.nj,a.ge,a.ev,r.lW,a.XQ,a.Gk],styles:[".sub-heading[_ngcontent-%COMP%]{font-size:18px;font-weight:700;font-family:Roboto}.mat-tab-lables[_ngcontent-%COMP%]{flex:50%;flex-wrap:wrap;justify-content:space-around;align-content:stretch;align-items:baseline;flex-direction:row}.Active[_ngcontent-%COMP%]   Surveys[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-color:blue}table[_ngcontent-%COMP%]{width:100%}.tableHeader[_ngcontent-%COMP%]{background-color:#1e90ff;font-size:medium;justify-content:center}.mat-column-position[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 0%!important;width:20%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-Actions[_ngcontent-%COMP%], .mat-column-name[_ngcontent-%COMP%]{justify-content:center}.mat-column-Actions[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 0%!important;width:20%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}"]}),t})()}];let O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.Bz.forChild(Y)],i.Bz]}),t})(),D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.ez,O,h.Nh,l.JF,r.ot,a.p0]]}),t})()}}]);