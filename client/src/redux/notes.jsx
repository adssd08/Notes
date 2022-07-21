import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	notes: [],
	status: false,
	search: "",
};

export const notesSlice = createSlice({
	name: "notes",
	initialState,
	reducers: {
		loadNotes(state, action) {
			state.notes = action.payload;
			state.search = "";
		},
		customLoadNotes(state, action) {
			state.search = action.payload.value;
			state.notes = action.payload.data;
		},
		changeStatus(state, action) {
			state.status = !state.status;
		},
	},
});

export const { loadNotes, changeStatus, customLoadNotes } = notesSlice.actions;
export default notesSlice.reducer;
