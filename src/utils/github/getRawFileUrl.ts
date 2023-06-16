import { FileLocator } from 'utils/github/FileLocator';

export function getRawFileUrl({
  branch,
  owner,
  path,
  repo,
}: FileLocator): string {
  return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`;
}
