export interface Card {
  media: string;
  image: string;
  title: string;
  url: string;
}

export interface CardCompact extends Card {
  description: string;
  date?: string;
}

export interface CardSearch extends Card {
  date: string;
}