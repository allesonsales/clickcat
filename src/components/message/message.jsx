import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import bus from "../../utils/bus";

function Message() {
  const [type, setType] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleFlash = ({ message, type }) => {
      setMessage(message);
      setType(type);
      setVisibility(true);

      setTimeout(() => {
        setVisibility(false);
      }, 3000);
    };
    bus.addListener("flash", handleFlash);

    return () => bus.removeListener("flash", handleFlash);
  }, []);

  return (
    visibility && (
      <div className={`${styles.message} ${styles[type]}`}>{message}</div>
    )
  );
}

export default Message;
