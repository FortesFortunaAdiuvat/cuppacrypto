import './globals.css';
import { ReactNode } from 'react';
import NavBar from '../components/NavBar';

export const metadata = {
  title: 'CuppaCrypto',
  description: 'Coffee and crypto themed shop',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
