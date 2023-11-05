'use client';

import { createContext, useState } from 'react';
import styles from './page.module.css'
import SignIn from './sign/in/page'
import { Auth, Store, User } from './interfaces';

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
