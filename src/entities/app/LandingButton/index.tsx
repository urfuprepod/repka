import { Button } from "@/shared";
import React from "react";
import styles from "./styles.module.css";

const LandingButton = () => {
  return (
    <Button className={styles["banner-button"]} type="primary">
      Создать медитацию
    </Button>
  );
};

export default LandingButton;
