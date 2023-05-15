import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalData: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalData: (state, action) => {
      state.modalData = action.payload;
      console.log(state.modalData);
    },
    closeModal: (state) => {
      state.modalData = null;
    },
  },
});

export const { setModalData, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
