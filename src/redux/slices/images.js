import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

const imageDataSlice = createSlice({
  name: "imageData",
  initialState,
  reducers: {
    setImageData: (state, action) => {
      state.images = action.payload;
    },
  },
});

export const { setImageData } = imageDataSlice.actions;
export default imageDataSlice.reducer;
