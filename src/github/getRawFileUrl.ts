import type { RepoLocator } from 'github/RepoLocator';

export function getRawFileUrl({ owner, repo }: RepoLocator, branch: string, path: string): string {
  return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`;
}
