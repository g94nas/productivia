import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const flashcardAdapter = createEntityAdapter();

const initialState = flashcardAdapter.getInitialState();

const flashcardSlice = createSlice({
  name: "flashcards",
  initialState,
  reducers: {
    addFlashcard: flashcardAdapter.addOne,
    removeFlashcard: flashcardAdapter.removeOne,
    editFlashcard: flashcardAdapter.upsertOne,
    completeFlashcard(state, action) {
      const { flashcardId } = action.payload;
      const flashcard = state.entities[flashcardId];
      flashcard.completed = !flashcard.completed;
    },
  },
});

export const {
  addFlashcard,
  removeFlashcard,
  editFlashcard,
  completeFlashcard,
} = flashcardSlice.actions;

export default flashcardSlice.reducer;

export const {
  selectAll: selectFlashcards,
  selectById: selectFlashcardsById,
} = flashcardAdapter.getSelectors((state) => state.flashcards);
