import { BranchLocator } from 'utils/github/BranchLocator';

export const CACHE_KEY = 'threejs-docs-cache';
export const DOCS_URL_ROOT = 'https://threejs.org/docs/#';
export const LOCATOR: BranchLocator = <const>{
  owner: 'mrdoob',
  repo: 'three.js',
  branch: 'master',
};
// TODO: Add language switching (and solve non-english JSON parse errors)
export const LANGUAGE = 'en';
// TODO: Add release switching
export const RELEASE = 'latest';
export const MANIFEST_PATH = 'docs/list.json';
export const MEMBER_BASE_PATH = 'docs';
export const URI_PATH_REGEX = /^\w+\/\w+\//gi;
