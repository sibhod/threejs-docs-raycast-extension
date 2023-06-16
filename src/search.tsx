import { List } from '@raycast/api';
import { useDocs } from 'hooks/useDocs';
import { LANGUAGE } from 'api/constants';
import { DocListItem } from 'components/DocListItem';

export default function Command() {
  const { isLoading, docs } = useDocs();
  const names = docs?.memberNames[LANGUAGE];
  const members = docs?.members[LANGUAGE];

  return (
    <List
      isLoading={isLoading}
      filtering
      // searchBarAccessory={}
      searchBarPlaceholder="Search Three.js documentation"
    >
      <List.Section title="Results" subtitle={names?.length + ''}>
        {members &&
          names?.map(
            (name) =>
              members[name] && <DocListItem key={name} member={members[name]} />
          )}
      </List.Section>
    </List>
  );
}
