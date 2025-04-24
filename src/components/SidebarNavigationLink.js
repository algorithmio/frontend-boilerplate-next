import React from "react";
import { Button, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import styles from "../styles/styles.module.css";

export function LinksGroup({
  icon: Icon,
  label,
  link,
  activeMenu,
  handleMenuChange,
  sidebarVisible,
}) {
  const theme = useMantineTheme();

  return (
    <Link prefetch={true} href={link} passHref className="underline-none">
      <Button
        px="xs"
        key={label}
        size="md"
        fullWidth
        fw={activeMenu === link ? "bold" : "normal"}
        variant={activeMenu === link ? "light" : "subtle"}
        color={activeMenu === link ? "brand" : "gray.8"}
        justify="left"
        bg={activeMenu === link ? "teal.0" : "none"}
        leftSection={sidebarVisible && <Icon />}
        classNames={{
          root: styles.buttonLink,
        }}
        styles={{
          root: {
            transition: theme.transitions.fast,
          },
        }}
      >
        {sidebarVisible ? label : <Icon />}
      </Button>
    </Link>
  );
}
