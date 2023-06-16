export interface DocsCache {
  readonly created: number;
  // readonly language: string;
  readonly release: string;
  readonly members: {
    [language: string]: { [name: string]: { url: string; markup?: string } };
  };
  readonly memberNames: {
    [language: string]: string[];
  };
}
