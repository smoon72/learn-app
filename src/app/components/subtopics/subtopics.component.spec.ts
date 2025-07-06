import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtopicsComponent } from './subtopics.component';

describe('SubtopicsComponent', () => {
  let component: SubtopicsComponent;
  let fixture: ComponentFixture<SubtopicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubtopicsComponent]
    });
    fixture = TestBed.createComponent(SubtopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
