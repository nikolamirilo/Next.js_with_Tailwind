import MainContextProvider from "@/context/MainContext";
import "./globals.css";

export const metadata = {
  title: "Projekat Fazon",
  description: "Projekat Fazon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MainContextProvider>
        <body>{children}</body>
      </MainContextProvider>
    </html>
  );
}
