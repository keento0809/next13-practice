import { Nav } from "@/src/app/components/nav/Nav";
import "./globals.css";
import Footer from "@/src/app/components/footer/Footer";

export const metadata = {
  title: "Freshmarche_ver2",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* // suppressHydrationWarning prevents extensions from causing a server/client mismatch */}
      <body suppressHydrationWarning={true}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}