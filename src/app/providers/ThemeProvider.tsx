// src/app/providers/ThemeProvider.tsx
"use client";

// Corrected imports
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes';
import { ReactNode } from 'react';

// Props interface remains the same
interface CustomThemeProviderProps extends ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children, ...props }: CustomThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  );
}