import type { ReleaseLocator } from 'utils/github/ReleaseLocator';
import { getRepoReleasesUrl } from 'utils/github/getRepoReleasesUrl';

export function getRepoReleaseUrl({
  releaseId,
  ...locator
}: ReleaseLocator): string {
  return `${getRepoReleasesUrl(locator)}/${releaseId}`;
}
