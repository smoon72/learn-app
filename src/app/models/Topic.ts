import { Flashcards } from "./Flashcards"
export interface Topic {
  name: string,
  subTopicList?: [ 
    {
      name: string,
      flashcards?: [
        Flashcards
      ]
    }
  ],
}
