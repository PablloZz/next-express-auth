import styles from "./styles.module.css";

type Properties = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Properties) {
  return <main className={styles.authLayout}>{children}</main>;
}
