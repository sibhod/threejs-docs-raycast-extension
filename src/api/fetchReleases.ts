import { fetchJsonWithToast } from 'api/fetchJsonWithToast';
import { LOCATOR } from 'api/constants';
import { getRepoReleaseUrl } from 'github/getRepoReleaseUrl';
import { Release } from 'api/Release';

export function fetchReleases() {
  return fetchJsonWithToast<Release[]>({
    url: getRepoReleaseUrl(LOCATOR),
    toast: {
      title: 'Fetching Three.js releases',
    },
  });
}
