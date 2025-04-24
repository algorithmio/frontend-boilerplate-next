"use client";
import React from "react";
import { Box, Flex, SimpleGrid, Title, useMantineTheme } from "@mantine/core";
import NextImage from "next/image";
// import logo from "@/assets/images/logo.svg";
import hero from "@/assets/images/hero.jpg";
import { useMediaQuery } from "@mantine/hooks";

const AuthLayout = ({ children }) => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 991px)");
  const isDesktop = useMediaQuery("(min-width: 992px)");

  return (
    <SimpleGrid h={"100vh"} cols={isMobile || isTablet ? 1 : 2}>
      {/* Left Half - Logo and Form */}
      <Flex justify="center" align="center" w={"55%"} mx={"auto"}>
        <Box>
          {/* <NextImage alt="Logo" width={isMobile ? 140 : 180} /> */}
          <Title>Donna AI</Title>
          <Flex
            mt={"xs"}
            direction="column"
            gap="14px"
            miw={isMobile ? "unset" : "330px"}
          >
            {children}
          </Flex>
        </Box>
      </Flex>

      {/* Right - Hero Image */}
      {!isMobile && !isTablet && (
        <Box bg="#E9F4EF" w="100%" h="100%">
          <Flex justify="center" align="center" w="100%" h="100%">
            <NextImage
              src={hero}
              alt="Auth Hero Image"
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
                maxHeight: "100vh",
              }}
            />
          </Flex>
        </Box>
      )}
    </SimpleGrid>
  );
};

export default AuthLayout;
