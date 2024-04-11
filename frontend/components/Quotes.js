import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { highlightQuote, deleteQuote } from '../state/quotesSlice';

export default function Quotes() {
  const quotes = useSelector(st => st.quotesSlice.quotes);
  const displayAllQuotes = useSelector(st => st.quotesSlice.displayAllQuotes) // ✨ `displayAllQuotes` must come from the Redux store
  const highlightedQuote = useSelector(st => st.quotesSlice.highlightedQuote) // ✨ `highlightedQuote` must come from the Redux store
  const dispatch = useDispatch();
  return (
    <div id="quotes">
      <h3>Quotes</h3>
      <div>
        {
          quotes
            ?.filter(qt => {
              return displayAllQuotes || !qt.apocryphal
            })
            .map(qt => (
              <div
                key={qt.id}
                className={`quote${qt.apocryphal ? " fake" : ''}${highlightedQuote === qt.id ? " highlight" : ''}`}
              >
                <div>{qt.quoteText}</div>
                <div>{qt.authorName}</div>
                <div className="quote-buttons">
                  <button onClick={() => dispatch(deleteQuote(qt.id))}>DELETE</button>
                  <button onClick={() => dispatch(highlightQuote(qt.id))}>HIGHLIGHT</button>
                  <button onClick={() => {/* ✨ dispatch an action */ }}>FAKE</button>
                </div>
              </div>
            ))
        }
        {
          !quotes?.length && "No quotes here! Go write some."
        }
      </div>
      {!!quotes?.length && <button onClick={() => {/* ✨ dispatch an action */ }}>
        {displayAllQuotes ? 'HIDE' : 'SHOW'} FAKE QUOTES
      </button>}
    </div>
  )
}
