import { fetchManifest } from 'api/fetchManifest';
import { usePreferences } from 'hooks/usePreferences';
import { CachedPromiseOptions, useCachedPromise } from '@raycast/utils';

export function useManifest(
  options?: CachedPromiseOptions<typeof fetchManifest, unknown>
) {
  const { release } = usePreferences();

  return useCachedPromise(fetchManifest, [release], {
    //initialData?: U;
    // keepPreviousData?: boolean;
    keepPreviousData: false,
    // abortable?: MutableRefObject<AbortController | null | undefined>;
    // execute,
    onError: (error: Error) => console.log('useManifest onError: ', error),
    onData: (data: any) => console.log('useManifest onData: ', typeof data),
    onWillExecute: (release: any) =>
      console.log('useManifest onWillExecute: ', release),
    ...options,
  });
}
