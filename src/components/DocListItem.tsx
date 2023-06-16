import { List, ActionPanel, Action } from '@raycast/api';
import { DocMember } from 'types/DocMember';
import { getDocUrl } from 'utils/getDocUrl';
import { getGithubUrl } from 'utils/getGithubUrl';

interface Props {
  member: DocMember;
}

export function DocListItem({ member }: Props) {
  return (
    <List.Item
      title={member.name}
      subtitle={member.category}
      actions={
        <ActionPanel>
          <ActionPanel.Section>
            <Action.OpenInBrowser
              title="Open Documentation Page"
              url={getDocUrl(member.uri)}
            />
            <Action.OpenInBrowser
              title="Open Github Source Page"
              url={getGithubUrl(member.uri)}
            />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
}
