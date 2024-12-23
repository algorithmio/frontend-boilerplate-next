import { useForm } from "@mantine/form";
import { mockFormInitialValues } from "@/constants/mockFormConstants";
import { mockFormSchema } from "@/schema/mockFormSchema";
import { yupResolver } from "@mantine/form";
import {
  Card,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
  Text,
} from "@mantine/core";

export default function MockForm({
  handleSubmit,
  isPending,
  isError,
  isSuccess,
}) {
  const form = useForm({
    initialValues: mockFormInitialValues,
    validate: yupResolver(mockFormSchema),
  });

  return (
    <>
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
    </>
  );
}
