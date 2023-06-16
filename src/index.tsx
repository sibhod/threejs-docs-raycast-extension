import { ActionPanel, Action, List } from '@raycast/api';
import { useMemo, useState } from 'react';
import { useMemberNames } from 'hooks/useMemberNames';
import { fuzzysearch } from 'fuzzysearch';

export default function Command() {
  const names = useMemberNames();
  const [searchText, setSearchText] = useState('');

  const filteredNames = useMemo(
    () => names?.filter((name) => searchText && fuzzysearch(searchText, name)),
    [names, searchText]
  );

  return (
    <List
      isLoading={false}
      onSearchTextChange={setSearchText}
      // searchBarAccessory={}
      searchBarPlaceholder="Search npm packages..."
      throttle
    >
      <List.Section title="Results" subtitle={filteredNames?.length + ''}>
        {filteredNames?.map((name) => (
          <SearchListItem key={name} name={name} />
        ))}
      </List.Section>
    </List>
  );
}

function SearchListItem({ name }: { name: string }) {
  return (
    <List.Item
      title={name}
      subtitle={name}
      actions={
        <ActionPanel>
          <ActionPanel.Section>
            <Action.OpenInBrowser title="Open in Browser" url={''} />
          </ActionPanel.Section>
          {/* <ActionPanel.Section>
            <Action.CopyToClipboard
              title="Copy Install Command"
              content={`npm install ${searchResult.name}`}
              shortcut={{ modifiers: ['cmd'], key: '.' }}
            />
          </ActionPanel.Section> */}
        </ActionPanel>
      }
    />
  );
}
