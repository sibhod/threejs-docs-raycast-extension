import { ManifestResponse } from 'api/ManifestResponse';
import { DocsCache } from 'DocsCache';
import { useEffect } from 'react';
import { useCachedState } from '@raycast/utils';
import { useManifest } from 'hooks/useManifest';
import { usePreferences } from 'hooks/usePreferences';
import type { Preferences } from 'Preferences';
import { showToast, Toast } from '@raycast/api';

const CACHE_KEY = 'threejs-docs';
const CACHE_LIFE = 1000; //7 * 24 * 60 * 60 * 1000;

export function useDocs() {
  const [docs, setDocs] = useCachedState<DocsCache>(CACHE_KEY);
  const { isLoading, data } = useManifest({ execute: !docs });
  const prefs = usePreferences();

  useEffect(() => {
    const now = new Date().getTime();
    if (docs && now - docs.created > CACHE_LIFE) {
      console.log('clearing stale docs', {
        now,
        created: docs.created,
        age: now - docs.created,
      });
      setDocs(undefined);
    }
  }, [docs]);

  useEffect(() => {
    if (docs && docs.release !== prefs.release) {
      console.log('clearing docs cache for new release');
      setDocs(undefined);
    }
  }, [docs, data]);

  useEffect(() => {
    if (data && !docs && !isLoading) {
      setDocs(createDocsCache(data, prefs));
      showToast({
        style: Toast.Style.Success,
        title: 'Docs loaded from manifest',
        message: `with languages: ${Object.keys(data).join(', ')}`,
      });
    }
  }, [data, docs, isLoading, prefs]);

  return docs;
}

function createDocsCache(
  manifest: ManifestResponse,
  prefs: Preferences
): DocsCache {
  const nameSet = new Set<string>();
  const { members, memberNames } = Object.entries(manifest).reduce<
    Pick<DocsCache, 'members' | 'memberNames'>
  >(
    (acc, [language, sections]) => {
      nameSet.clear();

      const flatRecord = Object.values(sections)
        .flatMap((s) => Object.values(s))
        .reduce((acc, categories) => Object.assign(acc, categories), {});

      const membersRecord = Object.entries(flatRecord).reduce<
        Record<string, { url: string }>
      >((acc, [name, url]) => {
        if (!url.startsWith('manual')) {
          nameSet.add(name);
          acc[name] = { url };
        }

        return acc;
      }, {});

      acc.members[language] = membersRecord;
      acc.memberNames[language] = Array.from(nameSet);

      return acc;
    },
    {
      members: {},
      memberNames: {},
    }
  );

  return {
    created: new Date().getTime(),
    release: prefs.release,
    members,
    memberNames,
  };
}
