import { Do_Hyeon, Poppins } from 'next/font/google';
import "./globals.css";

const doHyeon = Do_Hyeon({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dohyeon'
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
    <html lang="en" className={`${doHyeon.variable} ${poppins.variable}`}>
      <body className="font-poppins">
        {children}
      </body>
    </html>
  );
}
