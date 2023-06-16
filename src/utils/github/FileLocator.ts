import { BranchLocator } from 'utils/github/BranchLocator';

export type FileLocator = BranchLocator & {
  path: string;
};
