import { RepoLocator } from 'utils/github/RepoLocator';

export type ReleaseLocator = RepoLocator & {
  releaseId: number | 'latest';
};
