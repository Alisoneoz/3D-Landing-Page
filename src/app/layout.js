import { Orbitron, Poppins } from 'next/font/google';
import Script from 'next/script';
import "./globals.css";
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron'
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata = {
  title: "Three.js Showcase",
  description: "Exploring 3D graphics with Three.js and React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${poppins.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-CR7XCYQN0X"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CR7XCYQN0X');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
