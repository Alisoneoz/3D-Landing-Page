import { Orbitron, Poppins } from 'next/font/google';
import "./globals.css";


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
      <body>
        {children}
      </body>
    </html>
  );
}
