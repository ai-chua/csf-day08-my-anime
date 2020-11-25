export enum Type {
  Anime, Manga
}

export class SearchQuery {
  id?: number;
  q: string;
  type: Type
}