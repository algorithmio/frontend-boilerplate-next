import CustomMantineProvider from "./MantineProvider";

export default function RootProvider({ children }) {
  return <CustomMantineProvider>{children}</CustomMantineProvider>;
}
