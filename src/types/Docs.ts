import { DocMember } from 'types/DocMember';

export interface Docs {
  readonly created: number;
  readonly members: {
    [language: string]: { [name: string]: DocMember };
  };
  readonly memberNames: {
    [language: string]: string[];
  };
}
