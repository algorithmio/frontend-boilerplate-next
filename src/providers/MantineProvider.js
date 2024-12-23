import { MantineProvider } from "@mantine/core";

export default function CustomMantineProvider({ children }) {
  return <MantineProvider>{children}</MantineProvider>;
}
