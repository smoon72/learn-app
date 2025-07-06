import { IFlashcards } from "./IFlashcards"
export interface ITopic {
  name: string,
  subTopicList?: [ 
    {
      name: string,
      flashcards?: [
        IFlashcards
      ]
    }
  ],
}
