import React from 'react'
import { BookProvider } from './BookContext'

// * Combine all providers
const providers = [BookProvider]
const AppContextProvider = ({ children }: { children: JSX.Element }): any => {
  return providers.reduceRight((acc, Comp) => {
    return <Comp>{acc}</Comp>
  }, children)
}

export default AppContextProvider
