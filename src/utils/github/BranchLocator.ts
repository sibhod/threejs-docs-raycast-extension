import type { RepoLocator } from 'utils/github/RepoLocator';

export type BranchLocator = RepoLocator & {
  readonly branch: string;
};
