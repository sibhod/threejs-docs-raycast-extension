import type { RepoLocator } from 'github/RepoLocator';

export function getFileManifestUrl({ owner, repo }: RepoLocator, path: string): string {
  return `https://api.githubusercontent.com/${owner}/${repo}/contents/${path}`;
}
