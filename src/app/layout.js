import RootProvider from "@/providers/RootProvider";
import BasicAppShellLayout from "@/layouts/BasicAppShellLayout";
import '@mantine/core/styles.css';
import '@/styles/global.css';

export const metadata = {
  title: "Frontend Next Boilerplate",
  description: "Frontend Next Boilerplate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootProvider>
          <BasicAppShellLayout>{children}</BasicAppShellLayout>
        </RootProvider>
      </body>
    </html>
  );
}
