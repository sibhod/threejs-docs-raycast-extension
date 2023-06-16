import { useDocs } from 'hooks/useDocs';
import { usePreferences } from 'hooks/usePreferences';

export function useMemberNames() {
  const { language } = usePreferences();
  const docs = useDocs();

  return docs?.memberNames[language];
}
