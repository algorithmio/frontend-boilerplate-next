// src/constants/theme.js
import { brandColors } from "./colors";
import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colorScheme: "light",
  primaryColor: "brand",
  colors: {
    secondary: [brandColors.secondary],
    primaryText: [brandColors.primaryText],
    secondaryText: [brandColors.secondaryText],
    darkText: [brandColors.darkText],
    brand: [
      "#f3e8ff", // Very light purple (50)
      "#e9d8fd", // Light purple (100)
      "#d8b4fe", // Light purple (200)
      "#c084fc", // Light purple (300)
      "#a855f7", // Purple (400)
      "#9333ea", // Purple (500)
      "#7e22ce", // Dark purple (600)
      "#6b21a8", // Dark purple (700)
      "#581c87", // Dark purple (800)
      "#4c1d95", // Very dark purple (900)
    ],
  },
  fontFamily: '"Inter", sans-serif',
  defaultRadius: "md",
  transitions: {
    fast: "0.18s cubic-bezier(.4,0,.2,1)",
    medium: "0.3s cubic-bezier(.4,0,.2,1)",
    slow: "0.5s cubic-bezier(.4,0,.2,1)",
  },
});
