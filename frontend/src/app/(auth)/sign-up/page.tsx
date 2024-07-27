"use client";

import { type ChangeEvent, useCallback, useState } from "react";
import styles from "./styles.module.css";
import { SIGN_UP_FORM_DEFAULT_VALUES } from "../libs/constants";
import { type SignUpFormErrors } from "../libs/types";
import { signUpValidationSchema } from "../libs/validationSchemas";
import { joinErrors } from "../libs/helpers";

export default function SignUp() {
  const [formValues, setFormValues] = useState(SIGN_UP_FORM_DEFAULT_VALUES);
  const [formErrors, setFormErrors] = useState<SignUpFormErrors>({});

  const handleChangeFormValues = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name: fieldName, value: fieldValue } = event.target;

      setFormValues((previous) => ({
        ...previous,
        [fieldName]: fieldValue,
      }));
    },
    [setFormValues],
  );

  const handleSubmitForm = useCallback(() => {
    const { error } = signUpValidationSchema.safeParse(formValues);

    if (error) return setFormErrors(error.flatten().fieldErrors);
  }, [formValues, setFormErrors]);

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
          {formErrors.email && (
            <span className={styles["error"]}>{joinErrors(formErrors, "email")}</span>
          )}
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
          {formErrors.username && (
            <span className={styles["error"]}>{joinErrors(formErrors, "username")}</span>
          )}
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
          {formErrors.password && (
            <span className={styles["error"]}>{joinErrors(formErrors, "password")}</span>
          )}
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
          {formErrors.confirmPassword && (
            <span className={styles["error"]}>{joinErrors(formErrors, "confirmPassword")}</span>
          )}
        </label>
      </fieldset>
      <button className={styles["button"]} type="button" onClick={handleSubmitForm}>
        Sign up
      </button>
    </form>
  );
}
