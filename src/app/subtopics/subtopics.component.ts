import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtopics',
  templateUrl: './subtopics.component.html',
  styleUrls: ['./subtopics.component.scss']
})
export class SubtopicsComponent {
  @Input() flashcards: any[] | undefined = [];

  private selected!: boolean;

  ngOnInit() {
    this.selected = true;
  }

  public isSelected(): boolean {
    return this.selected;
  }

  
}
