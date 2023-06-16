import { LOCATOR } from 'api/constants';
import { getRawFileUrl } from 'utils/github/getRawFileUrl';

export const getDownloadUrl = (path: string) =>
  getRawFileUrl({ ...LOCATOR, path });
