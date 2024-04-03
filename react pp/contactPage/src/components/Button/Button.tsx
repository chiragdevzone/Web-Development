import styles from "./Button.module.css";
import { ReactNode } from "react";
interface buttonProps {
  text?: string;
  icon?: ReactNode;
  isprimary?: boolean;
}

const Button: React.FC<buttonProps> = ({ text, icon, isprimary, ...rest }) => {
  return (
    <>
      <button
        {...rest}
        className={
          isprimary ? `${styles.secondaryBtn}` : `${styles.primaryBtn}`
        }
      >
        {icon} {text}
      </button>
    </>
  );
};

export default Button;
