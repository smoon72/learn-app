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
  @Input() sideBarList!: ITopic[];

  @Output() eventEmitter = new EventEmitter();

  constructor(
    private topicService: TopicService
  ){};

  ngOnInit() {
  }

  navigateMainPage(topic: string): void {
    this.eventEmitter.emit(topic);
  }

  show(subTopic: any) {
    console.log(subTopic);
  }
}
