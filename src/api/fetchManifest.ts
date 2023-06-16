import { fetchJsonWithToast } from 'api/fetchJsonWithToast';
import { LOCATOR, MANIFEST_PATH } from 'api/constants';
import { getRawFileUrl } from 'utils/github/getRawFileUrl';
import { ManifestResponse } from 'api/ManifestResponse';
// import { openCommandPreferences } from '@raycast/api';

export function fetchManifest(branch: string = LOCATOR.branch) {
  return fetchJsonWithToast<ManifestResponse>({
    url: getRawFileUrl({ ...LOCATOR, branch, path: MANIFEST_PATH }),
    onError: (reason: unknown) => {
      console.log(
        `Invalid value for release '${branch}'. Please enter a valid release tag, or "latest".`
      );
      console.log('reason: ', reason);
      // openCommandPreferences();
    },
    toast: {
      title: `Fetching manifest from ${branch}`,
    },
  });
}
