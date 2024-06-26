import { Inter,Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/ThemeProvider";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
    
      <body className={inter.className}>
      <Providers >
      <Navbar/>
   
      {children}
  
        <Footer/>
        </Providers>
        </body>
    </html>
  );
}
