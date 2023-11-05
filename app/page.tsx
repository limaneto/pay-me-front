import { createContext, useState } from 'react';
import styles from './page.module.css'
import SignIn from './sign/in/page'
import { Store } from './interfaces';

export default function Home() {

  return (
    <main className={styles.main}>
      <SignIn />
    </main>
  )
}
