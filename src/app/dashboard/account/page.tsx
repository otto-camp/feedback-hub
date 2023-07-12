import { env } from '@/env.mjs';
import { UserProfile } from '@clerk/nextjs';

import { Shell } from '@/components/Shell';

export const metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Account',
  description: 'Manage your account settings',
};

export default function AccountPage() {
  return (
    <Shell>
      <div>
        <h1 className='line-clamp-1 text-3xl font-bold tracking-tight'>
          Account
        </h1>
        <p className='line-clamp-2 text-muted-foreground'>
          Manage your account settings
        </p>
      </div>

      <div className='mx-auto overflow-hidden rounded-lg'>
        <UserProfile
          appearance={{
            variables: {
              borderRadius: '0.25rem',
            },
            elements: {
              card: 'shadow-none',
              navbar: 'hidden',
              navbarMobileMenuButton: 'hidden',
              headerTitle: 'hidden',
              headerSubtitle: 'hidden',
            },
          }}
        />
      </div>
    </Shell>
  );
}
