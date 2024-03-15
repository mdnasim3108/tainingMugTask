import { createSlice } from '@reduxjs/toolkit';

export interface PostState {
    likedPosts: Array<Object>
}

const initialState: PostState = {
    likedPosts: []
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPost: (state,action) => { 
            return {likedPosts:[...state.likedPosts,action.payload]}
        },
        removePost: (state,action) => { 
            const postIndex=action.payload
            const updated=state.likedPosts.filter((post,index)=>index!=postIndex)
            return {likedPosts:updated}
            
        },
        
    }
})

export const { addPost,removePost } = postSlice.actions;

export default postSlice.reducer;