import { fetchManifest } from 'api/fetchManifest';
import { CachedPromiseOptions, useCachedPromise } from '@raycast/utils';

export function useManifest(
  options?: CachedPromiseOptions<typeof fetchManifest, unknown>
) {
  return useCachedPromise(fetchManifest, [], {
    keepPreviousData: false,
    ...options,
  });
}
