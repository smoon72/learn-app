import { Component, Input } from '@angular/core';
import { IFlashcards } from 'src/app/models/IFlashcards';

@Component({
  selector: 'app-subtopics',
  templateUrl: './subtopics.component.html',
  styleUrls: ['./subtopics.component.scss']
})
export class SubtopicsComponent {
  @Input() flashcards: IFlashcards[] = [];

  private selected!: boolean;

  ngOnInit() {
    this.selected = true;
  }

  public isSelected(): boolean {
    return this.selected;
  }

}
