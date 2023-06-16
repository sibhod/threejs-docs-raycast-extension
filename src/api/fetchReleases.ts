import { fetchJsonWithToast } from 'api/fetchJsonWithToast';
import { LOCATOR } from 'api/constants';
import { getRepoReleasesUrl } from 'utils/github/getRepoReleasesUrl';
import { Release } from 'api/Release';

export function fetchReleases() {
  return fetchJsonWithToast<Release[]>({
    url: getRepoReleasesUrl(LOCATOR),
    toast: {
      title: 'Fetching Three.js releases',
    },
  });
}
