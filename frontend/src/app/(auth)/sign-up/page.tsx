"use client";

import { type ChangeEvent, useCallback, useState } from "react";
import styles from "./styles.module.css";
import { SIGN_UP_FORM_DEFAULT_VALUES } from "../libs/constants";

export default function SignUp() {
  const [formValues, setFormValues] = useState(SIGN_UP_FORM_DEFAULT_VALUES);

  const handleChangeFormValues = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name: fieldName, value: fieldValue } = event.target;

    setFormValues((previous) => ({
      ...previous,
      [fieldName]: fieldValue,
    }));
  }, []);
  console.log(formValues);

  return (
    <form className={styles["form"]}>
      <h1 className={styles["heading"]}>Sign up</h1>
      <fieldset className={styles["controls"]}>
        <legend className="visibility-hidden">Credentials</legend>
        <label className={styles["label"]}>
          <span>Email:</span>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChangeFormValues}
            className={styles["input"]}
          />
        </label>
        <label className={styles["label"]}>
          <span>Username:</span>
          <input
            type="text"
            name="username"
            id="username"
            value={formValues.username}
            onChange={handleChangeFormValues}
            placeholder="Username"
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
            value={formValues.password}
            onChange={handleChangeFormValues}
            className={styles["input"]}
          />
        </label>
        <label className={styles["label"]}>
          <span>Confirm Password:</span>
          <input
            type="Confirm password"
            name="confirmPassword"
            id="confirmPassword"
            value={formValues.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChangeFormValues}
            className={styles["input"]}
          />
        </label>
      </fieldset>
      <button className={styles["button"]} type="button">
        Sign up
      </button>
    </form>
  );
}
