import { Docs } from 'types/Docs';
import { useEffect } from 'react';
import { useCachedState } from '@raycast/utils';
import { useManifest } from 'hooks/useManifest';
import { showToast, Toast } from '@raycast/api';
import { generateDocs } from '../utils/generateDocs';
import { CACHE_KEY } from 'api/constants';

export function useDocs() {
  const [docs, setDocs] = useCachedState<Docs>(CACHE_KEY);
  const { isLoading, data, ...result } = useManifest({ execute: !docs });

  useEffect(() => {
    if (data && !docs && !isLoading) {
      setDocs(generateDocs(data));
      showToast({
        style: Toast.Style.Success,
        title: 'Docs loaded from manifest',
      });
    }
  }, [data, docs, isLoading]);

  return { docs, isLoading: isLoading || !docs, ...result };
}
