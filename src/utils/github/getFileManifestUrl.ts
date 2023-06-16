import { FileManifestLocator } from 'utils/github/FileManifestLocator';

export function getFileManifestUrl({
  owner,
  path,
  repo,
}: FileManifestLocator): string {
  return `https://api.githubusercontent.com/${owner}/${repo}/contents/${path}`;
}
