// src/app/layout.js
import { GoogleAnalytics } from '@next/third-parties/google'
import { Orbitron, Poppins } from 'next/font/google';
import "./globals.css";
import { GA_TRACKING_ID } from '@/lib/ga';
import AnalyticsTest from '@/components/ui/AnalyticsTest'

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
  console.log('GA ID:', GA_TRACKING_ID) // Cambiado para usar la constante importada
  
  return (
    <html lang="en" className={`${orbitron.variable} ${poppins.variable}`}>
      <body>
      <AnalyticsTest />
        {children}
        <GoogleAnalytics gaId="G-CR7XCYQN0X" />
      </body>
    </html>
  );
}
