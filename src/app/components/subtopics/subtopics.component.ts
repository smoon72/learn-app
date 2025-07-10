import { Component, Input, SimpleChanges } from '@angular/core';
import { Flashcards } from 'src/app/models/Flashcards';


@Component({
  selector: 'app-subtopics',
  templateUrl: './subtopics.component.html',
  styleUrls: ['./subtopics.component.scss']
})
export class SubtopicsComponent {
  @Input() flashcards: Flashcards[] = [];

  pristineFlashcards: Flashcards[] = [];

  private selected!: boolean;

  ngOnInit() {
    this.selected = true;
    // Might have to use await for this one
    this.pristineFlashcards = [...this.flashcards];
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['flashcards'] && changes['flashcards'].firstChange()) {
  //     this.pristineFlashcards = changes['flashcards'].currentValue;
  //   }
  // }

  public isSelected(): boolean {
    return this.selected;
  }
  randomize() {
    this.flashcards.sort(() => Math.random() - 0.5);
  }

  getPristine() {
    console.log(this.pristineFlashcards);
    this.flashcards = this.pristineFlashcards;
  }
}
