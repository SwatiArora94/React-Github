import { RootState } from "store";

export const getRepoFromRepoList = (state: RootState, repoId?: number) => {
    const { repos = [] } = state.repos || {};
    const item = repos.find(repo => repo.id === repoId);
    return item;
}