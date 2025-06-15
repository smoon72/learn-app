import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  topics!: string[];

  @Output() eventEmitter = new EventEmitter();

  ngOnInit() {
    // get it from HTTP mock rquest
    this.topics = ['Angular', 'Springboot', 'Korean'];
  }

  navigateMainPage(topic: string): void {
    this.eventEmitter.emit(topic);
  }

}
