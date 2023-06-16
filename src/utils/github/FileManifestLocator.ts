import { BranchLocator } from 'utils/github/BranchLocator';

export type FileManifestLocator = BranchLocator & {
  path: string;
};
