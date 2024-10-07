
import ImgIconTransparent from '../../media/icon.png?jsx';
import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import Sessions from "../auth/session/session"
export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.container}>
        <div class={styles.logoContainer}>
          <ImgIconTransparent alt="Food App" class={styles.logoImage} />
          <h2 class={styles.logoText}>VITIANS</h2>
        </div>
        <nav class={styles.nav}>
          <ul class={styles.navList}>
            <li> <a href="/">Home</a></li>
            <li> <a href='/browse'>Browse</a></li>
            <li><a href='/create'>Create</a></li>          
          </ul>
         
        </nav>
        <Sessions />
        
      </div>
    </header>
  );
});
