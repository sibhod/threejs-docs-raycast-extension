import { URI_PATH_REGEX, LOCATOR } from 'api/constants';
import { getBranchUrl } from 'utils/github/getBranchUrl';

export function getGithubUrl(path: string) {
  return `${getBranchUrl(LOCATOR)}/src/${path.replace(URI_PATH_REGEX, '')}.js`;
}
