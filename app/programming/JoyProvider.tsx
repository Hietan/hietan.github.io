"use client";

import {CssVarsProvider, extendTheme} from "@mui/joy/styles";
import type {ReactNode} from "react";

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          body: "#0d1117",
          surface: "#161b22",
          level1: "#21262d",
          level2: "#30363d",
        },
        primary: {
          50: "#cae8ff",
          100: "#a5d6ff",
          200: "#79c0ff",
          300: "#58a6ff",
          400: "#388bfd",
          500: "#1f6feb",
          600: "#1158c7",
          solidBg: "#238636",
          solidHoverBg: "#2ea043",
          solidActiveBg: "#238636",
          plainColor: "#58a6ff",
          plainHoverBg: "#21262d",
        },
        neutral: {
          plainColor: "#8b949e",
          plainHoverBg: "#21262d",
        },
        divider: "#30363d",
        text: {
          primary: "#e6edf3",
          secondary: "#8b949e",
          tertiary: "#6e7681",
        },
      },
    },
  },
  fontFamily: {
    body: '"IBM Plex Sans", "Noto Sans JP", system-ui, sans-serif',
    code: '"IBM Plex Mono", "Fira Code", monospace',
  },
  typography: {
    h1: {fontSize: "2rem", fontWeight: 700},
    h2: {fontSize: "1.25rem", fontWeight: 600},
  },
});

export default function JoyProvider({children}: {children: ReactNode}) {
  return (
    <CssVarsProvider theme={theme} defaultMode="dark">
      {children}
    </CssVarsProvider>
  );
}
