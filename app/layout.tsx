import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "فضل الكندى - حلول الذكاء الاصطناعى",
  description: "A premium AI section with an interactive Spline robot and cursor light.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
