import { Component } from '@angular/core';
import { TopicService } from '../../services/TopicService';
import { Topic } from 'src/app/models/Topic';
import { Router } from '@angular/router';
import { Flashcards } from 'src/app/models/Flashcards';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  topicList: Topic[] = [];
  flashcards: Flashcards[] =[];

  constructor(
    private router: Router,
    private topicService: TopicService,
  ){}

  ngOnInit() {
    // I think this is what they mean by procedural vs declarative
    this.topicService.getTopics().subscribe(
      data => {
        this.topicList = data;
        this.getSubTopics(this.topicList);
      }
    )
  }

  getFlashcards(event: any){
    // this.router.navigate([`/${event}`]);
    this.flashcards = this.topicList
      .find(topic => topic.name === event.topic)
      ?.subTopicList
      ?.find(subTopic => subTopic.name === event.subTopic)
      ?.flashcards ?? [];

    return this.flashcards;
  }

  getSubTopics(topicList: Topic[]): Topic[] {
    let sideBarList: Topic[] = [];

    topicList.forEach(topic => {
      let subTopic: any = {};
      let subTopicList: any[] = [];
      
      topic.subTopicList?.forEach(subTopic => {
        subTopicList.push(subTopic.name);
      })
      
      subTopic.name = topic.name;
      subTopic.subTopicList = subTopicList;
      sideBarList.push(subTopic);
    })
    return sideBarList;
  }
}
