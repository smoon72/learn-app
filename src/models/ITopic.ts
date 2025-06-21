

export interface ITopic {
  name:string,
  subTopicList?: [ 
    {
      name: string,
      flashcards?: [
        {
          word:string,
          definition: string
        }
      ]
    }
  ],
}
