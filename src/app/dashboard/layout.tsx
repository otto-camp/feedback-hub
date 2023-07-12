import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

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
