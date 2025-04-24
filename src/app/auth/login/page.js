"use client";
import React, { useEffect } from "react";
import {
  Button,
  PasswordInput,
  TextInput,
  Title,
  useMantineTheme,
  Flex,
  Center,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { IconMail, IconEye, IconEyeOff } from "@tabler/icons-react";
import { loginSchema } from "@/schema/auth.schema";
import { useRouter } from "next/navigation";
import NextImage from "next/image";

const LogInPage = () => {
  useEffect(() => {
    document.title = "Login - Donna AI";
  }, []);

  const theme = useMantineTheme();
  const router = useRouter();

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
    validate: yupResolver(loginSchema),
  });

  const handleSubmit = () => {
    try {
      const validation = form.validate();
      if (validation.hasErrors) {
        console.error(error);
        return;
      }
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Center>
      <Flex direction="column" gap="16px" p={0}>
        <Title order={3} c={theme.colors.darkText[0]}>
          Login to access your dashboard
        </Title>

        {/* Form Section */}
        {/* Username Input */}
        <TextInput
          placeholder="Username"
          rightSection={<IconMail size={20} color="gray" />}
          {...form.getInputProps("username")}
          required
          error={form.errors.username}
        />
        {/* Password Input */}
        <PasswordInput
          placeholder="Password"
          {...form.getInputProps("password")}
          required
          error={form.errors.password}
          visibilityToggleIcon={({ reveal }) =>
            reveal ? <IconEye size={20} /> : <IconEyeOff size={20} />
          }
        />
        {/* Submit Button */}
        <Button
          fullWidth
          mt="md"
          color="brand"
          size="lg"
          style={{ height: 42 }}
          onClick={handleSubmit}
        >
          Sign In
        </Button>
      </Flex>
    </Center>
  );
};

export default LogInPage;
