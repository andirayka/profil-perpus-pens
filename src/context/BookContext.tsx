import api from '@/utils/api'
import { createContext, useReducer } from 'react'

interface ContextInterface {
  state: {
    books: any[]
    bookKeyword: string
  }
  getBooks: (keyword?: string) => Promise<void>
}

const initialValue = {
  state: {
    books: [],
    bookKeyword: '',
  },
  getBooks: async () => undefined,
}

interface ActionsInterface {
  type: 'SET_BOOK_LIST'
  books: any[]
  bookKeyword: string
}

const reducer = (state: any, action: ActionsInterface): any => {
  switch (action.type) {
    case 'SET_BOOK_LIST':
      return { ...state, books: action.books, bookKeyword: action.bookKeyword }

    default:
      return state
  }
}

export const BookContext = createContext<ContextInterface>(initialValue)
export const BookProvider: any = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialValue.state)

  const getBooks = async (keyword = ''): Promise<void> => {
    try {
      let route = 'books'
      if (keyword !== '') {
        route += `?keyword=${keyword}`
      }
      const res = await api.get(route)
      dispatch({
        type: 'SET_BOOK_LIST',
        books: res.data.data,
        bookKeyword: keyword,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <BookContext.Provider value={{ state, getBooks }}>
      {children}
    </BookContext.Provider>
  )
}
