import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  topics!: string[];

  ngOnInit() {
    // get it from HTTP mock rquest
    this.topics = ['Angular', 'Springboot', 'Korean'];
  }

  navigateMainPage(topic: string): void {
    console.log(topic);
  }

}
