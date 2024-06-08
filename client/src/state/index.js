import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  mode: "light",
  user: "null",
  posts: [],
};

export const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) =>{
        state.user = action.payload.user;
        state.token = action.payload.token;
    },
    setLogout: (state) =>{
        state.user = null;
        state.token = null;
    },
    setFriends: (state, action) =>{
        if (state.user){
            state.user.friends = action.payload.friends;
        }else{
            console.log("no friends non-existent :(");
        }
    },
    setPosts: (state, action) =>{
        state.posts = action.payload.posts;
    },
    setPosts:()
  },
});
