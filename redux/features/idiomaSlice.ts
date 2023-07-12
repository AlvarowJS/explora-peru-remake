import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IdiomaState = {
  idioma: boolean;
};

const initialState: IdiomaState = {
  idioma: false,
};
export const idiomaSlice = createSlice({
  name: "idioma",
  initialState,
  reducers: {
    change: (state) => {
      state.idioma == !state.idioma
    }
  }
})

export const { change } = idiomaSlice.actions
export default idiomaSlice.reducer;
