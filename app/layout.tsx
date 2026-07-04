import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Naga Kishore K | DevOps Engineer",
  description:
    "DevOps Engineer specializing in AWS, Docker, Kubernetes, Terraform, Linux and CI/CD.",
  keywords: [
    "DevOps",
    "AWS",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Linux",
    "CI/CD",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}