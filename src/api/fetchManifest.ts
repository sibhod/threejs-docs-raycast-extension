import { fetchJsonWithToast } from 'api/fetchJsonWithToast';
import { LOCATOR, MANIFEST_PATH } from 'api/constants';
import { getRawFileUrl } from 'github/getRawFileUrl';
import { ManifestResponse } from 'api/ManifestResponse';
// import { openCommandPreferences } from '@raycast/api';

export function fetchManifest(release: string) {
  const branch = release === 'latest' ? LOCATOR.branch : release;
  console.log('fetchManifest: ', getRawFileUrl(LOCATOR, branch, MANIFEST_PATH));
  return fetchJsonWithToast<ManifestResponse>({
    url: getRawFileUrl(LOCATOR, branch, MANIFEST_PATH),
    error: {
      title: `Invalid valid for release ${release}. Please enter a valid release tag, or "latest".`,
    },
    onError: (reason: any) => {
      console.log(
        `Invalid value for release '${release}'. Please enter a valid release tag, or "latest".`
      );
      console.log('reason: ', reason);
      // openCommandPreferences();
    },
    toast: {
      title: `Fetching manifest from ${release} branch`,
    },
  });
}
