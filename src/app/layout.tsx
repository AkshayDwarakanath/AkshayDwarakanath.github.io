import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmoothScroll } from "@/components/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://akshaydwarakanath.github.io";

export const metadata: Metadata = {
  title: {
    default: "Akshay D — Software Engineer & Security Specialist",
    template: "%s | Akshay D",
  },
  description:
    "Software Engineer with 9+ years of experience in cloud-native systems, IAM & security, and scalable web applications. Currently at Cisco Duo.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Akshay D",
    title: "Akshay D — Software Engineer & Security Specialist",
    description:
      "Software Engineer with 9+ years of experience in cloud-native systems, IAM & security, and scalable web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay D — Software Engineer & Security Specialist",
    description:
      "Software Engineer with 9+ years of experience in cloud-native systems, IAM & security, and scalable web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "bYEu7Wl7q55FYLGiQ3-s3K1NOGOPpgxYkUdq2_6R4fw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#f8f9fa] dark:bg-gray-900 font-mono flex flex-col`}
      >
        <SmoothScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "2579bdee3fe14fa99b72d76b993557bd"}'
          strategy="afterInteractive"
        />
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/69dfd3963f5fe21c385b014a/1jm9551og';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
