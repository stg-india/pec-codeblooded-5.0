
import { Nunito } from 'next/font/google'
// import NsForm0 from './components/new-student/NsForm0';
// import NsForm2 from './components/new-student/NsForm2';
// import NsForm3 from './components/new-student/NsForm3';
// import NsForm4 from './components/new-student/NsForm4';
// import NsForm5 from './components/new-student/NsForm5';
// import NsForm6 from './components/new-student/NsForm6';
// import NsForm7 from './components/new-student/NsForm7';
// import NsForm8 from './components/new-student/NsForm8';
import { Hero } from './components/hero-section/Hero';
import Navbar from '@/app/components/navbar/Navbar';
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';

import ToasterProvider from '@/app/providers/ToasterProvider';

import './globals.css'
import getCurrentUser from './actions/getCurrentUser';

export const metadata = {
  title: 'StuManager',
  description: 'Dev',
}

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar />
        <div className="w-30 bg-white">{children}</div>
        {/* <NsForm0/> */}
      </body>
    </html>
  );
}
