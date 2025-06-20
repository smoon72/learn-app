import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title: string = "Welcome";
  
  displayTopic(event: any){
    this.title = event;
  }
}
