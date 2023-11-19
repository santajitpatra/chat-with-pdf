import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { cn, constructMetadata } from '@/lib/utils'
import Providers from '@/components/Providers'
import { Toaster } from '@/components/ui/toaster'
import "simplebar-react/dist/simplebar.min.css";


const inter = Inter({ subsets: ['latin'] })

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <Providers>
        <body
          className={cn(
            "min-h-screen font-sans antialiased grainy",
            inter.className
          )}
        >
          <Toaster />
          <Navbar />
          {children}
          
        </body>
      </Providers>
    </html>
  );
}
