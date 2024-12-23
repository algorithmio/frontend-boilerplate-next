"use client";

import { Title, Text, Button, Card, Stack } from "@mantine/core";
import { useRandomFactsQuery } from "@/hooks/useRandomFactsQuery";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { IconArrowLeft } from "@tabler/icons-react";

export default function RandomFactsPage() {
  const router = useRouter();
  const { data, isLoading, error, refetch } = useRandomFactsQuery();

  const handleGetRandomFact = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      <Stack gap="md">
        <Button
          w="fit-content"
          variant="outline"
          leftSection={<IconArrowLeft size={16} />}
          onClick={() => router.push("/")}
        >
          Back
        </Button>

        <Title order={1}>Random Facts API</Title>
        <Text>This is a page that shows some random facts.</Text>
        <Button color="blue" onClick={handleGetRandomFact} disabled={isLoading}>
          {isLoading ? "Loading..." : error ? "Retry" : "Get Random Facts"}
        </Button>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text c={error ? "red" : "black"}>
            {error
              ? error.message
              : data?.text || "Click the button to get a random fact!"}
          </Text>
        </Card>
      </Stack>
    </>
  );
}
