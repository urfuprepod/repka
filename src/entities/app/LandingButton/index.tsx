import { Button } from "@/shared";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const LandingButton = () => {
  return (
    <Link href="/create">
      <Button className={styles["banner-button"]} type="primary">
        Создать медитацию
      </Button>
    </Link>
  );
};

export default LandingButton;
