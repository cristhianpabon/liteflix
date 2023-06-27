import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  disableAnimations: false,
};

export const animationsSlice = createSlice({
  name: "animations",
  initialState,
  reducers: {
    setDisableAnimationsValue: (state, action) => {
      state.disableAnimations = action.payload;
    },
  },
});

export const { setDisableAnimationsValue } = animationsSlice.actions;

export default animationsSlice.reducer;
