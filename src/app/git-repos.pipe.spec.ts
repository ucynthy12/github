import { GitReposPipe } from './git-repos.pipe';

describe('GitReposPipe', () => {
  it('create an instance', () => {
    const pipe = new GitReposPipe();
    expect(pipe).toBeTruthy();
  });
});
