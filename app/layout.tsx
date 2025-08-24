import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'CuppaCrypto',
  description: 'Coffee and crypto themed shop',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
