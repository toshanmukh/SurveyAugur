import { UUID } from "angular2-uuid";
import { QuestionResp } from "./questionresp";

export class Responses{
 surveyId:UUID=UUID.UUID
   responseId:UUID=UUID.UUID
   questions:QuestionResp[] =[]
    createdOn:Date=new Date()

    constructor(surveyId?:UUID,responseId?:UUID, questions?:QuestionResp [], createdOn?:Date){
      
    }
}