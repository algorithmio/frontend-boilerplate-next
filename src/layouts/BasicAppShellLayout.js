"use client";

import { AppShell, Title } from "@mantine/core";

export default function BasicAppShellLayout({ children }) {
  return (
    <AppShell
      padding="lg"
    >
      <AppShell.Header>
        <Title order={2} ta="center">
          Header
        </Title>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
