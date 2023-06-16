import { useDocs } from 'hooks/useDocs';
import { usePreferences } from 'hooks/usePreferences';

export function useMembers() {
  const { language } = usePreferences();
  const docs = useDocs();

  return docs?.members[language];
}
