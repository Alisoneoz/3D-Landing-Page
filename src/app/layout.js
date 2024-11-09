import { Orbitron, Poppins } from 'next/font/google';
import Script from 'next/script';
import "./globals.css";
import { GA_TRACKING_ID } from '@/lib/gtag';

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
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
