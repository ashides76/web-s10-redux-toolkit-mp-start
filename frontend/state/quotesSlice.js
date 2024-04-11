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
    defaultState: state => {
      return state.initialState
    }
  }
})

export const {
  defaultState,
} = quotesSlice.actions

export default quotesSlice.reducer