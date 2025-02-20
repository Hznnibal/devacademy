import { MainLayout } from '@/components/layout/main-layout';
import type { Metadata } from 'next';
import '../globals.css';


export const metadata: Metadata = {
  title: 'Dev Academy',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>{children}</MainLayout>
  );
}
