import type { RepoLocator } from 'github/RepoLocator';

export type BranchLocator = RepoLocator & {
  readonly branch: string;
};
