import styles from '../styles/Home.module.css'
import {Link} from "../components/Link";
import {Headline} from "../components/Headline";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Link/>

    </main>
  )
}
