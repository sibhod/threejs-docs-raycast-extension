import { BranchLocator } from 'utils/github/BranchLocator';

export function getBranchUrl({ owner, branch, repo }: BranchLocator): string {
  return `https://github.com/${owner}/${repo}/blob/${branch}`;
}
