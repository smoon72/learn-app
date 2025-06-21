import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tap } from 'rxjs';
import { ITopic } from 'src/models/ITopic';
import { TopicService } from '../services/TopicService';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  topicList!: ITopic[];

  @Output() eventEmitter = new EventEmitter();

  constructor(
    private topicService: TopicService
  ){};

  ngOnInit() {
    this.topicService.getTopics().subscribe(
      response => this.topicList = response
    )
  }

  navigateMainPage(topic: string): void {
    this.eventEmitter.emit(topic);
  }

}
