import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITopic } from "src/app/models/ITopic";

@Injectable( {
  providedIn: "root"
})

export class TopicService {

  private getTopicsURL = 'api/topics.json';

  constructor(
    private http: HttpClient
  ){}

  getTopics(): Observable<ITopic[]> {
    return this.http.get<ITopic[]>(this.getTopicsURL);
  }
}