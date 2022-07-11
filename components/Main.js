import classes from './Main.module.css'
import {Link} from "./Link";
import {Headline} from "./Headline";

export function Main(props) {
  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      <Link/>

    </main>
  )
}
