'use client';

import { createContext, useState } from 'react'
import styles from './page.module.css'
import SignIn from './sign/in/page'
import { Auth, Store, User } from './interfaces'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

export const Context = createContext<Store>({
  updateUser: () => {},
  updateAuth: () => {},
});

export default function Home() {
  const [user, setUser] = useState<User>()
  const [auth, setAuth] = useState<Auth>()

  const updateUser = (user: User) => {
    setUser(user)
  }

  const updateAuth = (auth: Auth) => {
    setAuth(auth)
  }

  return (
    <Context.Provider value={{ user, updateUser, auth, updateAuth }}>
      <ApolloProvider client={client}>
        <main className={styles.main}>
          <SignIn />
        </main>
      </ApolloProvider>
    </Context.Provider>
  )
}
