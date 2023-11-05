'use client';

import { createContext, useState } from 'react';
import styles from './page.module.css'
import SignIn from './sign/in/page'
import { Auth, Store, User } from './interfaces';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

interface Client {
  uri: string;
  
}

const client = new ApolloClient<>({
  uri: 'http://localhost:4000/graphql',

})

export const Context = createContext<Store | null>(null);

export default function Home() {
  const [user, setUser] = useState<User>();
  const [auth, setAuth] = useState<Auth>();

  const updateUser = (user: User) => {
    setUser(user)
  }

  const updateAuth = (auth: Auth) => {
    setAuth(auth)
  }

  return (
    <Context.Provider value={{ user, updateUser, auth, updateAuth }}>
      <main className={styles.main}>
      <SignIn />
    </main>
    </Context.Provider>
  )
}
