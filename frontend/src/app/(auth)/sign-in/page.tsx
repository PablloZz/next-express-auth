"use client";

import { useCallback, useState, type ChangeEvent } from "react";
import { SIGN_IN_FORM_DEFAULT_VALUES } from "../libs/constants";
import { type SignInFormErrors } from "../libs/types";
import styles from "./styles.module.css";
import { joinErrors } from "../libs/helpers";
import { signIn, signInValidationSchema } from "@/packages/auth";
import { useAuthContext } from "@/context/authContext";
import { TOKEN } from "@/libs/constants";

export default function SignIn() {
  const [formValues, setFormValues] = useState(SIGN_IN_FORM_DEFAULT_VALUES);
  const [formErrors, setFormErrors] = useState<SignInFormErrors>({});
  const { handleSetUserDetails } = useAuthContext();

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

  const handleSubmitForm = useCallback(async () => {
    const { error } = signInValidationSchema.safeParse(formValues);

    if (error) return setFormErrors(error.flatten().fieldErrors);

    setFormErrors({});
    const { email, password } = formValues;
    const { user, token } = await signIn({ email, password });
    localStorage.setItem(TOKEN, token);
    handleSetUserDetails(user);
  }, [formValues, setFormErrors]);

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
            onChange={handleChangeFormValues}
            className={styles["input"]}
          />
          {formErrors.email && (
            <span className={styles["error"]}>{joinErrors(formErrors, "email")}</span>
          )}
        </label>
        <label className={styles["label"]}>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChangeFormValues}
            className={styles["input"]}
          />
          {formErrors.password && (
            <span className={styles["error"]}>{joinErrors(formErrors, "password")}</span>
          )}
        </label>
      </fieldset>
      <button className={styles["button"]} type="button" onClick={handleSubmitForm}>
        Sign in
      </button>
    </form>
  );
}
