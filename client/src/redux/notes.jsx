import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	notes: [],
	status: false,
};

export const notesSlice = createSlice({
	name: "notes",
	initialState,
	reducers: {
		loadNotes(state, action) {
			state.notes = action.payload;
		},
		changeStatus(state, action) {
			state.status = !state.status;
		},
	},
});

export const { loadNotes, changeStatus } = notesSlice.actions;
export default notesSlice.reducer;
