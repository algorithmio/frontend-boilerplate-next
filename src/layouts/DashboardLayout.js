"use client";
import React, { useState } from "react";
import {
  AppShell,
  Avatar,
  Text,
  ActionIcon,
  Flex,
  ScrollArea,
  useMantineTheme,
} from "@mantine/core";
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarRightCollapse,
} from "@tabler/icons-react";
import { useHotkeys } from "react-hotkeys-hook";
import { useAuth } from "@/store/store";
import { LinksGroup } from "@/components/SidebarNavigationLink";
import { NAV_ITEMS } from "./constants";

const SIDEBAR_WIDTH = 230;
const SIDEBAR_COLLAPSED_WIDTH = 78;

function DashboardLayout({ children }) {
  const theme = useMantineTheme();
  const { account, logout } = useAuth();
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState("");

  const handleSidebarToggle = () => setSidebarVisible((v) => !v);

  // Add keyboard shortcut
  useHotkeys("ctrl+alt+s", () => handleSidebarToggle(), [sidebarVisible], {
    enableOnTags: ["INPUT", "TEXTAREA"],
  });

  return (
    <AppShell
      padding="md"
      navbar={{
        width: sidebarVisible ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
        breakpoint: "sm",
        collapsed: { mobile: !sidebarVisible },
      }}
      header={{ height: 57 }}
      styles={{
        main: {
          background: theme.colors.gray[0],
          transition: theme.transitions.fast,
        },
      }}
    >
      {/* Header */}
      <AppShell.Header
        height={57}
        p="md"
        style={{
          background: "white",
        }}
      >
        <Flex align="center" justify="space-between" h="100%">
          <Flex align="center" gap="md">
            {/* Sidebar toggle button */}
            <ActionIcon
              size="lg"
              radius="md"
              variant="subtle"
              color="gray"
              style={{
                transition: theme.transitions.fast,
              }}
              onClick={handleSidebarToggle}
            >
              {sidebarVisible ? (
                <IconLayoutSidebarLeftCollapse size={22} color="black" />
              ) : (
                <IconLayoutSidebarRightCollapse size={22} color="black" />
              )}
            </ActionIcon>

            {/* Logo */}
            <Text fw={700} size="lg">
              Donna Dashboard
            </Text>
          </Flex>

          {/* Profile section remains the same */}
          <Flex align="center" gap="10px">
            <Avatar
              name={account?.display_name}
              color="brand"
              alt={account?.username}
              radius="xl"
            />
            {/* ... rest of profile section ... */}
          </Flex>
        </Flex>
      </AppShell.Header>

      {/* Sidebar */}
      <AppShell.Navbar
        width={{
          base: sidebarVisible ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
        }}
        p="md"
        style={{
          background: "white",
          transition: theme.transitions.fast,
          overflow: "hidden",
        }}
      >
        {/* Remove the toggle button section */}
        <ScrollArea h="100%" w="100%">
          <Flex direction="column" gap="md" w="100%">
            {NAV_ITEMS.map((item) => (
              <LinksGroup
                key={item.label}
                icon={item.icon}
                label={item.label}
                link={item.link}
                activeMenu={activeMenu}
                handleMenuChange={setActiveMenu}
                sidebarVisible={sidebarVisible}
              />
            ))}
          </Flex>
        </ScrollArea>
      </AppShell.Navbar>
      {/* Main Content */}
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

export default DashboardLayout;
