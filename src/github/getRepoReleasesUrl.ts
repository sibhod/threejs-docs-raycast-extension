import type { RepoLocator } from 'github/RepoLocator';

export function getRepoReleasesUrl({ owner, repo }: RepoLocator): string {
  return `https://api.github.com/repos/${owner}/${repo}/releases`;
}
