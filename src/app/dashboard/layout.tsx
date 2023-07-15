import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs';
import Footer from '@/layouts/Footer';
import Header from '../../layouts/dashboard/Header';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  if (!user) {
    redirect('/signin');
  }

  return (
    <>
      <Header user={user} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
