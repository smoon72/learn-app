import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITopic } from 'src/models/ITopic';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() sideBarList!: ITopic[];

  @Output() eventEmitter = new EventEmitter();

  constructor(){};

  ngOnInit() {}

  navigateMainPage(topic: any, subTopic: any): void {
    this.eventEmitter.emit({
      topic: topic.name,
      subTopic: subTopic
    });
  }

  show(subTopic: any) {
    console.log(subTopic);
  }
}
