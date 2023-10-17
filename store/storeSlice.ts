import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideNavOpen: false,
  isPeriodIdPopupOpen: false,
  selectedBudget: {},
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    toggleSideNav: (state) => {
      state.isSideNavOpen = !state.isSideNavOpen;
    },
    togglePeriodIdPopup: (state) => {
      state.isPeriodIdPopupOpen = !state.isPeriodIdPopupOpen;
    },
    setSelectedBudget: (state, actions) => {
      state.selectedBudget = actions.payload;
    },
  },
});

export const { toggleSideNav, setSelectedBudget, togglePeriodIdPopup } = storeSlice.actions;

export default storeSlice.reducer;
