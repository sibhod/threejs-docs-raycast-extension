import { ManifestResponse } from 'api/ManifestResponse';
import { DocMember } from 'types/DocMember';
import { Docs } from 'types/Docs';

export function generateDocs(manifest: ManifestResponse): Docs {
  const nameSet = new Set<string>();
  const categoryMap = new Map<string, string>();

  return Object.entries(manifest).reduce<Docs>(
    (acc, [language, sections]) => {
      nameSet.clear();
      categoryMap.clear();

      const flatRecord = Object.values(sections)
        .flatMap((s) => Object.entries(s))
        .reduce<Record<string, string>>((acc, [category, members]) => {
          Object.keys(members).forEach((name) =>
            categoryMap.set(name, category)
          );
          return Object.assign(acc, members);
        }, {});

      const membersRecord = Object.entries(flatRecord).reduce<
        Record<string, DocMember>
      >((acc, [name, uri]) => {
        if (!uri.startsWith('manual')) {
          nameSet.add(name);
          //api/en/animation/AnimationAction
          acc[name] = {
            category: categoryMap.get(name) ?? 'unknown',
            name,
            uri,
          };
        }

        return acc;
      }, {});

      acc.members[language] = membersRecord;
      acc.memberNames[language] = Array.from(nameSet);

      return acc;
    },
    {
      created: new Date().getTime(),
      members: {},
      memberNames: {},
    }
  );
}
