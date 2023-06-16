import { DOCS_URL_ROOT } from 'api/constants';

export function getDocUrl(path: string) {
  return `${DOCS_URL_ROOT}${path}`;
}
