export interface Repo {
  name: String;
  description: String;
  url: String;
}

export interface PinnedItems {
  nodes: Array<Repo>;
}

export interface Repositories {
  nodes: Array<Repo>;
}
export interface User {
  pinnedItems?: PinnedItems;
  repositories?: Repositories;
}
export interface Viewer {
  pinnedItems?: PinnedItems;
  repositories?: Repositories;
}

export interface UserResponse {
  user: User;
}

export interface ViewerResponse {
  viewer: Viewer;
}
