import styles from "./styles.module.css";

export function Header({black}){
  return (
    <header className={black ? styles.black : ''}>
      <div className={styles.logo}>
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" />
        </a>
      </div>

      <div className={styles.user}>
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user" />
        </a>
      </div>
    </header>
  );
}
