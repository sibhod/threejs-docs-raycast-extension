import type { BranchLocator } from 'github/BranchLocator';

export interface ApiState {
  readonly language: string;
  readonly locator: BranchLocator;
  readonly release: string;
}
