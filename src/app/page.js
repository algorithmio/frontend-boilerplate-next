"use client";

import { Container, Title, Text, Button, Stack, Card } from "@mantine/core";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Title order={1}>State Management Example</Title>
        
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <Text size="lg">
              Current count: {count}
            </Text>
            
            <Button 
              variant="filled" 
              color="blue"
              onClick={() => setCount(count + 1)}
            >
              Increment Count
            </Button>
          </Stack>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text size="lg" mb="md">
            This is a placeholder card to demonstrate layout. Click the button above to see state management in action.
          </Text>
        </Card>

        <Stack gap="md">
          <Button 
            variant="outline" 
            color="green" 
            onClick={() => router.push('/api-example-1')}
          >
            Go to API Example 1
          </Button>

          <Button 
            variant="outline" 
            color="purple" 
            onClick={() => router.push('/api-example-2')}
          >
            Go to API Example 2
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
