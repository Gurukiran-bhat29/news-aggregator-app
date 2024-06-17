import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: 'news-article',
  initialState: {
    articles: []
  },
  reducers: {
    saveArticle: (state, action) => {
      state.articles = action.payload;
    }
  }
})

export const { saveArticle } = articleSlice.actions;

export default articleSlice.reducer;