export const API_KEY: string = 'dbf1c7765b624e9b88f395f84220595c';

interface Path {
  staticImage: string,
  defaultImage: string
}

export const PATH: Path = {
  staticImage: "https://res.cloudinary.com/demo/image/fetch/",
  defaultImage: "/images/defaultImage.jpg"
}

interface Content {
  categories: Array<string>
}

export const CONTENT: Content = {
  categories: ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology']
}

