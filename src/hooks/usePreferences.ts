import { getPreferenceValues } from '@raycast/api';
import type { Preferences } from 'Preferences';
import { useMemo } from 'react';

export function usePreferences() {
  const preferences = useMemo(getPreferenceValues<Preferences>, []);

  return {
    ...preferences,
    release: preferences.release || 'latest',
  };
}
