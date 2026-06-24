import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/animation/CursorGlow";
import WarmHealthCanvas from "@/components/animation/WarmHealthCanvas";

export const metadata = {
  title: "Prematurite Digital Health - Premature Baby Care Education in India",
  description: "A warm, trusted digital resource for Indian parents and families navigating premature birth, NICU journeys, growth milestones, kangaroo care, and home care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen relative">
        <WarmHealthCanvas />
        <CursorGlow />
        <Header />
        <main className="flex-grow pt-[65px] md:pt-[75px] flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
