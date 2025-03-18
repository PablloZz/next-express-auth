import styles from "./styles.module.css";

export default function SignIn() {
  return (
    <form className={styles["form"]}>
      <h1 className={styles["heading"]}>Sign in</h1>
      <fieldset className={styles["controls"]}>
        <legend className="visibility-hidden">Credentials</legend>
        <label className={styles["label"]}>
          <span>Email:</span>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className={styles["input"]}
          />
        </label>
        <label className={styles["label"]}>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className={styles["input"]}
          />
        </label>
      </fieldset>
      <button className={styles["button"]} type="button">
        Sign in
      </button>
    </form>
  );
}
