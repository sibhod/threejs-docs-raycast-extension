import type { RepoLocator } from 'github/RepoLocator';
import { getRepoReleasesUrl } from 'github/getRepoReleasesUrl';

export function getRepoReleaseUrl(locator: RepoLocator, releaseId: number | 'latest' = 'latest'): string {
  return `${getRepoReleasesUrl(locator)}/${releaseId}`;
}
