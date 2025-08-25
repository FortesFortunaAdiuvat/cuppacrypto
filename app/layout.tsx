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
      <body className="min-h-screen bg-gradient-to-b from-black via-indigo-950 to-purple-900 text-fuchsia-100">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
