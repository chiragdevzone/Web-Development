import { MdOutlineMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Button from "../Button/Button";
import styles from "./ContactPage.module.css";
import { ReactNode, useState } from "react";
interface ContactPageProps {
  // Define any props if needed
  icon?: ReactNode;
  text?: string;
  isprimary?: boolean;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [text, setText] = useState("");

  const submitform = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const nameInput = target.elements.namedItem("name") as HTMLInputElement;
    const emailInput = target.elements.namedItem("email") as HTMLInputElement;
    const textArea = target.elements.namedItem("text") as HTMLTextAreaElement;

    setName(nameInput.value);
    setEmail(emailInput.value);
    setText(textArea.value);
  };

  return (
    <>
      <div className={`${styles.container} `}>
        <div></div>
        <div className={`${styles.formtext}`}>
          <div className={styles.btns}>
            <div className={`${styles.btn}`}>
              <Button icon={<MdOutlineMessage />} text="VIA SUPPORT CHAT" />
              <Button icon={<IoCallSharp />} text="VIA CALL" />
            </div>
            <Button
              icon={<MdOutlineMessage />}
              text="VIA EMAIL FORM"
              isprimary={true}
            />
          </div>

          <form onSubmit={submitform}>
            <div className={styles.formControl}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />

              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />

              <label htmlFor="text">Text</label>
              <textarea name="text" cols={30} rows={10} id="text"></textarea>
            </div>
            <div className={styles.submitBtn}>
              <Button text="Submit" />
            </div>
          </form>
        </div>
        <div>
          <img
            className={styles.image}
            src="/images/heroImage.png"
            alt="hero image"
          />
        </div>
      </div>
      <div>
        name is : {name} email is : {email} text is : {text}
      </div>
    </>
  );
};
