import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
