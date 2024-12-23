"use client";

import {
  Container,
  Title,
  Text,
  Button,
  Stack,
  Card,
  Group,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { useCounterStore } from "@/store/store";
import { useEffect } from "react";

export default function Home() {
  const { count, increment, decrement, setCount } = useCounterStore();
  const router = useRouter();

  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    if (savedCount !== null) {
      setCount(parseInt(savedCount));
    }
  }, []);

  const handleIncrement = () => {
    increment();
    localStorage.setItem("count", (count + 1).toString());
  };

  const handleDecrement = () => {
    decrement();
    localStorage.setItem("count", (count - 1).toString());
  };

  const handleReset = () => {
    setCount(0);
    localStorage.removeItem("count");
  };

  return (
    <>
      <Stack gap="xl">
        <Title order={1}>State Management Example</Title>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <Text>This is a state management example using Zustand.</Text>
            <Text size="lg">Current count: {count}</Text>

            <Group>
              <Button variant="filled" color="blue" onClick={handleIncrement}>
                Increment Count
              </Button>
              <Button variant="filled" color="red" onClick={handleDecrement}>
                Decrement Count
              </Button>
              <Button variant="filled" color="gray" onClick={handleReset}>
                Reset Count
              </Button>
            </Group>
          </Stack>
        </Card>

        <Stack gap="md">
          <Button color="green" onClick={() => router.push("/random-facts")}>
            Go and Get Some Random Facts
          </Button>

          <Button color="blue" onClick={() => router.push("/mock-form")}>
            Go to Mock Form
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
