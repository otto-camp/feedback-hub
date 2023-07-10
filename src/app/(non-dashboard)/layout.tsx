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
    <div>
      <main>
        <Header user={user} />
        {children}
        <Footer />
      </main>
    </div>
  );
}
