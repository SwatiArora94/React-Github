import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TRepos } from './types'
import { TRepo } from 'types/repo'

const initialState: TRepos = {
    repos: [],
}

export const repoSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
        setRepos: (state, action: PayloadAction<Array<TRepo>>) => {
            state.repos = action.payload
        },
    },
})

export const { setRepos } = repoSlice.actions;

export default repoSlice.reducer;