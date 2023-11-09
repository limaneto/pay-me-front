'use client'

import { ReactElement, createContext, useState } from 'react'
import { Auth, Store, User } from './interfaces'
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const GlobalContext = createContext<Store>({
  updateUser: () => {},
  updateAuth: () => {},
});

const Context = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>()
  const [auth, setAuth] = useState<Auth>()

  const updateUser = (user: User) => {
    setUser(user)
  }

  const updateAuth = (auth: Auth) => {
    setAuth(auth)
  }

  return (
    <GlobalContext.Provider value={{ user, updateUser, auth, updateAuth }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default Context