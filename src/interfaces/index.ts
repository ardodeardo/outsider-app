export interface Data {
  status: string;
  totalResults: number;
  articles: Array<Article>;
  code?: string;
  message?: string;
}

export interface Article {
  source: { id: string, name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | string[];
}