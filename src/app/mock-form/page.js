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
import { useRouter } from "next/navigation";
import { IconArrowLeft } from "@tabler/icons-react";

export default function MockFormPage() {
  const router = useRouter();
  const form = useForm({
    initialValues: mockFormInitialValues,
    validate: yupResolver(mockFormSchema),
  });
  const { mutate, isPending, isError, isSuccess, data } = useMockMutation();

  const handleSubmit = (values) => {
    mutate(values);
  };

  return (
    <>
      <Button
        w="fit-content"
        variant="outline"
        leftSection={<IconArrowLeft size={16} />}
        onClick={() => router.push("/")}
      >
        Back
      </Button>
      <Title order={1}>Mock Form</Title>
      <Flex direction="row" gap="md">
        <Box w="50%">
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack gap="md">
                <TextInput
                  label="Name"
                  placeholder="Enter your name"
                  {...form.getInputProps("name")}
                />
                <NumberInput
                  label="Age"
                  placeholder="Enter your age"
                  min={0}
                  max={120}
                  {...form.getInputProps("age")}
                />
                <Select
                  label="Gender"
                  placeholder="Select your gender"
                  data={["MALE", "FEMALE"]}
                  {...form.getInputProps("gender")}
                />

                <Button
                  type="submit"
                  disabled={isPending}
                  loading={isPending}
                  fullWidth
                >
                  {isPending ? "Submitting..." : "Submit"}
                </Button>
              </Stack>
            </form>
            {isSuccess && (
              <Text c="green" mt="md" ta="center" fw={500}>
                Form submitted successfully
              </Text>
            )}
            {isError && (
              <Text c="red" mt="md" ta="center" fw={500}>
                Error submitting form
              </Text>
            )}
          </Card>
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
    </>
  );
}
