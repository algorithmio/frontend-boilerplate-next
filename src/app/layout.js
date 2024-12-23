import RootProvider from "@/providers/RootProvider";
import BasicAppShellLayout from "@/layouts/BasicAppShellLayout";
import { Container } from "@mantine/core";
import "@mantine/core/styles.css";
import "@/styles/global.css";

export const metadata = {
  title: "Frontend Next Boilerplate",
  description: "Frontend Next Boilerplate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootProvider>
          <BasicAppShellLayout>
            <Container size="lg" py="xl">
              {children}
            </Container>
          </BasicAppShellLayout>
        </RootProvider>
      </body>
    </html>
  );
}
