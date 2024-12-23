"use client";

import { useMockMutation } from "@/hooks/useMockMutation";
import { useForm, yupResolver } from "@mantine/form";
import { mockFormSchema } from "@/schema/mockFormSchema";
import {
  Grid,
  Card,
  Text,
  Title,
  Button,
  TextInput,
  NumberInput,
  Select,
  Flex,
  Box,
  Stack,
  Code,
} from "@mantine/core";
import { mockFormInitialValues } from "@/constants/mockFormConstants";
import BackButton from "@/components/BackButton";
import MockForm from "@/components/MockForm";

export default function MockFormPage() {
  const { mutate, isPending, isError, isSuccess, data } = useMockMutation();

  const handleSubmit = (values) => {
    mutate(values);
  };

  return (
    <>
      <Stack gap="md">
        <Flex justify="space-between" align="center" gap="md">
          <BackButton />
          <Title order={1}>Mock Form</Title>
        </Flex>
        <Flex direction="row" gap="md">
          <Box w="50%">
            <MockForm
              handleSubmit={handleSubmit}
              isPending={isPending}
              isError={isError}
              isSuccess={isSuccess}
            />
          </Box>
          <Box w="50%">
            <Card w="100%" shadow="sm" padding="lg" radius="md" withBorder>
              <Text size="sm" fw={500} mb="md">
                Response Data:
              </Text>
              <Code block>{JSON.stringify(data, null, 2)}</Code>
            </Card>
          </Box>
        </Flex>
      </Stack>
    </>
  );
}
