import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { currentUser } from '@clerk/nextjs';

export default async function NonDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  return (
    <>
      <Header user={user} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
