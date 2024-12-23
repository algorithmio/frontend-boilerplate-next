"use client";

import { Container, Title, Text, Button, Card, Stack } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { getRandomFacts } from "@/services/randomFactsService";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { IconArrowBack, IconArrowLeft } from "@tabler/icons-react";

export default function RandomFactsPage() {
  const router = useRouter();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["randomFacts"],
    queryFn: getRandomFacts,
    enabled: false,
  });

  const handleGetRandomFact = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <Container size="md" py="xl">
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
    </Container>
  );
}
