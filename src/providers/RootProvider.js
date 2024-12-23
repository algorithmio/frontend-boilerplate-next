"use client";

import CustomMantineProvider from "./MantineProvider";
import CustomQueryClientProvider from "./QueryClientProvider";

export default function RootProvider({ children }) {
  return (
    <CustomMantineProvider>
      <CustomQueryClientProvider>{children}</CustomQueryClientProvider>
    </CustomMantineProvider>
  );
}
