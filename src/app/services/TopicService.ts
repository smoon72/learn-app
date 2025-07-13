import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Topic } from "src/app/models/Topic";
import { Flashcards } from "../models/Flashcards";

@Injectable( {
  providedIn: "root"
})

export class TopicService {

  private getTopicsURL = 'api/topics.json';

  constructor(
    private http: HttpClient
  ){}

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.getTopicsURL);
  }

  getAllFlashCards(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.getTopicsURL)
  }
}