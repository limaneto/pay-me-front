import styles from './page.module.css'
import SignIn from './sign/in/page'
import Dashboard from './dashboard/page';

export default function Home() {
  return (
    <main className={styles.main}>
      <SignIn />
    </main>
  )
}
