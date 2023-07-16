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
      <Header
        firstName={user.firstName}
        lastName={user.lastName}
        imageUrl={user.imageUrl}
        email={user.emailAddresses[0].emailAddress}
      />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </>
  );
}
