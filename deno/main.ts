import { UserResponse, ViewerResponse, Viewer, User, Repo } from "./types.d.ts";
import {
  PinnRequestString,
  PinnViewerString,
  RepoViewerString,
  RepoString,
} from "./RequestString.ts";
import { GQLRequest } from "./Request.ts";

export const getPinned = async (
  userName: String,
  nr: Number,
  token: any
): Promise<Array<Repo> | undefined> => {
  return GQLRequest(PinnRequestString, { userName: userName, nr: nr }, token)
    .then((r) => r.json())
    .then((payload) => payload.data as UserResponse)
    .then((res) => res.user as User)
    .then((user) => user.pinnedItems?.nodes);
};

export const getYourPinned = async (
  nr: Number,
  token: any
): Promise<Array<Repo> | undefined> => {
  return GQLRequest(PinnViewerString, { nr: nr }, token)
    .then((r) => r.json())
    .then((payload) => payload.data as ViewerResponse)
    .then((res) => res.viewer as Viewer)
    .then((viewer) => viewer.pinnedItems?.nodes);
};

export const getRepositories = async (
  userName: String,
  nr: Number,
  token: any
): Promise<Array<Repo> | undefined> => {
  return GQLRequest(RepoString, { userName: userName, nr: nr }, token)
    .then((r) => r.json())
    .then((payload) => payload.data as UserResponse)
    .then((res) => res.user as User)
    .then((user) => user.repositories?.nodes);
};

export const getYourRepositories = async (
  nr: Number,
  token: any
): Promise<Array<Repo> | undefined> => {
  return GQLRequest(RepoViewerString, { nr: nr }, token)
    .then((r) => r.json())
    .then((payload) => payload.data as ViewerResponse)
    .then((res) => res.viewer as Viewer)
    .then((viewer) => viewer.repositories?.nodes);
};

export { GQLRequest };
export type { Repo };
