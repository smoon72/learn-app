

export interface ITopic {
  name:string,
  subTopicList: [ 
    {
      subTopic: string,
      flashcards: [
        {
          word:string,
          definition: string
        }
      ]
    }
  ],
}
