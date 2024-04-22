import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Book = {
  name: string;
  price: number;
  category: string;
  id: number;
};

export interface BookListSliceState {
  list: Book[];
}

const initialState: BookListSliceState = {
  list: [
    {
      name: "The Great Gatsby",
      price: 10,
      category: "Fiction",
      id: 1,
    },
    {
      name: "To Kill a Mockingbird",
      price: 15,
      category: "Fiction",
      id: 2,
    },
    {
      name: "1984",
      price: 20,
      category: "Fiction",
      id: 3,
    },
  ],
};

export const bookListSlice = createSlice({
  name: "booklist",
  initialState,
  reducers: (create) => ({
    // Logic to add a book to the list
    add: create.reducer((state, action: PayloadAction<Book>) => {
      state.list.push(action.payload);
    }),

    // Logic to remove a book from the list
    remove: create.reducer((state, action: PayloadAction<number>) => {
      state.list = state.list.filter((book) => book.id !== action.payload);
    }),

    // Logic to update a book in the list
    update: create.reducer((state, action: PayloadAction<Book>) => {
      state.list = state.list.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );
    }),
  }),
  selectors: {
    selectList : (bookList) => bookList.list,
  },
});

export const { add, remove, update } = bookListSlice.actions;

export const { selectList } = bookListSlice.selectors;
