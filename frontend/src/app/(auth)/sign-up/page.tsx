import styles from "./styles.module.css";

export default function SignUp() {
  return (
    <form className={styles.form}>
      <h1 className={styles.heading}>Sign up</h1>
      <fieldset className={styles.controls}>
        <legend className="visibilityHidden">Credentials</legend>
        <label className={styles.label}>
          <span>Email:</span>
          <input type="text" name="email" id="email" placeholder="Email" className={styles.input} />
        </label>
        <label className={styles.label}>
          <span>Username:</span>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          <span>Password:</span>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            className={styles.input}
          />
        </label>
      </fieldset>
      <button className={styles.button} type="button">
        Sign up
      </button>
    </form>
  );
}


// Authentication
