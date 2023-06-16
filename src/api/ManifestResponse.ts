export type ManifestResponse = {
  [language: string]: {
    [section: string]: {
      [category: string]: {
        [member: string]: string;
      };
    };
  };
};
