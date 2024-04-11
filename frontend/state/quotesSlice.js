// ✨ create your `quotesSlice` in this module
import { createSlice } from '@reduxjs/toolkit'

let id = 1
const getNextId = () => id++

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState: {
    displayAllQuotes: true,
    highlightedQuote: null,
    quotes: [
      {
        id: getNextId(),
        quoteText: "Don't cry because it's over, smile because it happened.",
        authorName: "Dr. Seuss",
        apocryphal: false,
      },
      {
        id: getNextId(),
        quoteText: "So many books, so little time.",
        authorName: "Frank Zappa",
        apocryphal: false,
      },
      {
        id: getNextId(),
        quoteText: "Be yourself; everyone else is already taken.",
        authorName: "Oscar Wilde",
        apocryphal: false,
      },
    ],
  },
  reducers: {
    highlightQuote: (state, action) => {
      let quote = state.quotes.id !== action.payload ? action.payload : null
      state.highlightedQuote = quote
    },
    deleteQuote: (state, action) => {
      state.quotes = state.quotes.filter(qt => qt.id !== action.payload);
    },
    fakeQuote: (state, action) => {
      state.quotes = state.quotes.map(qt => {
        if (qt.id !== action.payload) return qt
        return { ...qt, apocryphal: !qt.apocryphal }
      })
    }
  }
})

export const {
  highlightQuote,
  deleteQuote,
  fakeQuote,
} = quotesSlice.actions

export default quotesSlice.reducer