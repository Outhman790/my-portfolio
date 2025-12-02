import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Outhman Moumou | Full-Stack Developer & DevOps Engineer",
  description: "Full-Stack Web Developer & Junior DevOps/Cloud Engineer. From code to cloud: I build clean, scalable, and highly available web applications.",
  keywords: ["Full-Stack Developer", "DevOps Engineer", "Cloud Engineer", "Web Development", "React", "Next.js", "Node.js"],
  authors: [{ name: "Outhman Moumou" }],
  icons: {
    icon: [
      { url: "/logo-dark.png", type: "image/png" },
    ],
    apple: [
      { url: "/logo-dark.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Outhman Moumou | Full-Stack Developer & DevOps Engineer",
    description: "From code to cloud: I build clean, scalable, and highly available web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}

        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "3d12b4b16ac9419db6c32bcace652e77"}'
          strategy="afterInteractive"
        />
        
      </body>
    </html>
  );
}
