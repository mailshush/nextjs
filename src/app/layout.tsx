import * as React from 'react';
import type { Metadata } from "next";
import {
  Container,
} from '@mui/material';

export const metadata = {
  title: {
    template: "%s | 検索サイト",
    default: "検索サイトTOP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Container>
        {children}
        </Container>
      </body>
    </html>
  );
}
