import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local"

const protoMono = localFont({
  src: [
    {
      path: "../public/fonts/ProtoMono-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/ProtoMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ProtoMono-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-proto-mono",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>STREAMLINE | NFT Trading Platform</title>
        <meta name="description" content="The ultimate NFT trading platform" />
      </head>
      <body className={`${protoMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
