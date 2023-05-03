interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Thumbnails {
  default: Thumbnail;
  high: Thumbnail;
  maxres: Thumbnail;
  medium: Thumbnail;
  standard: Thumbnail;
}

interface Localized {
  description: string;
  title: string;
}

interface Snippet {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  localized: Localized;
  publishedAt: string;
  thumbnails: Thumbnails;
  title: string;
}

interface Statistics {
  commentCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}

export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface YoutubeSearchListResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}
