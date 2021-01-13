import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import { FilterStatus } from "../filters/filterSlice";

const flashcardAdapter = createEntityAdapter();

const initialState = flashcardAdapter.getInitialState();

const flashcardSlice = createSlice({
  name: "flashcards",
  initialState,
  reducers: {
    addFlashcard: flashcardAdapter.addOne,
    addManyFlashcards: flashcardAdapter.addMany,
    removeFlashcard: flashcardAdapter.removeOne,
    editFlashcard: flashcardAdapter.upsertOne,
    completeFlashcard(state, action) {
      const flashcardId = action.payload;
      const flashcard = state.entities[flashcardId];
      flashcard.completed = !flashcard.completed;
    },
  },
});

export const {
  addFlashcard,
  addManyFlashcards,
  removeFlashcard,
  editFlashcard,
  completeFlashcard,
} = flashcardSlice.actions;

export default flashcardSlice.reducer;

export const {
  selectAll: selectFlashcards,
  selectById: selectFlashcardsById,
} = flashcardAdapter.getSelectors((state) => state.flashcards);

export const selectFilteredFlashcards = createSelector(
  selectFlashcards,
  (state) => state.filters,
  (flashcards, filters) => {
    const { status } = filters;
    const showAll = status === FilterStatus.All;
    if (showAll) {
      return flashcards;
    }

    const showCompleted = status === FilterStatus.Completed;
    return flashcards.filter((flashcard) => {
      const statusMatch = showAll || flashcard.completed === showCompleted;
      return statusMatch;
    });
  }
);

export const selectFilteredTodoById = createSelector(
  selectFilteredFlashcards,
  (filteredFlashcards) => filteredFlashcards.map((flashcard) => flashcard.id)
);
