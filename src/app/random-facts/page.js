"use client";

import { Title, Text, Button, Card, Stack, Flex } from "@mantine/core";
import BackButton from "@/components/BackButton";
import { useRandomFactsQuery } from "@/hooks/useRandomFactsQuery";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function RandomFactsPage() {
  const router = useRouter();
  const { data, isLoading, error, refetch } = useRandomFactsQuery();

  const handleGetRandomFact = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      <Stack gap="md">
        <Flex justify="space-between" align="center" gap="md">
          <BackButton />
          <Title order={1}>Random Facts API</Title>
        </Flex>
        <Text>This is a page that shows some random facts.</Text>
        <Button
          color="blue"
          onClick={handleGetRandomFact}
          disabled={isLoading}
          loading={isLoading}
        >
          {error ? "Retry" : "Get Random Facts"}
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
