interface Pagination {
  pageSize?: number;
  page?: number;
}

export interface Headlines extends Pagination {
  q?: string;
  country?: string;
  category?: string | string[];
  // category?: "business" | "entertainment" | "general" | "health" | "science" | "sports" | "technology";
  sources?: string;
}

export interface Everything extends Pagination {
  q: string;
  language?: string;
  sortBy?: "relevancy" | "popularity" | "publishedAt";
  from?: string;
  to?: string;
}