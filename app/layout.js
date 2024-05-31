import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Appwrite Next.js auth",
  description: "A simple Next.js app with Appwrite authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster/>
        {children}
        </body>
    </html>
  );
}
