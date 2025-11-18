import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Doe - AI Specialist & Developer",
  description: "Personal portfolio of John Doe, AI Specialist and Developer. Showcasing projects in machine learning, web development, and artificial intelligence.",
  keywords: "AI, machine learning, web development, portfolio, John Doe, artificial intelligence, deep learning",
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe - AI Specialist & Developer",
    description: "Personal portfolio showcasing AI and development projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body
        className="antialiased dark bg-background-dark text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
