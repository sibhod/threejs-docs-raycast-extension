import { BranchLocator } from 'github/BranchLocator';
import { GITHUB, MANIFEST_PATH } from 'constants';
import { getFileManifestUrl } from 'github/getFileManifestUrl';
// export const GITHUB: BranchLocator = <const>{
//   owner: 'mrdoob',
//   repo: 'three.js',
//   branch: 'master',
// };
// export const MANIFEST_PATH = 'docs/list.json';
// export const MEMBER_BASE_PATH = 'docs';

declare namespace Api {
  export function fetchManifest(prefs: Preferences) {
    return fetchManifest(prefs);
  }
}
