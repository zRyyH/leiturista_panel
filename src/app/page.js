'use client';

import { useRouter } from 'next/navigation';
import SplashScreen from '@/components/ui/SplashScreen';
import { INFO } from '@/core/config/global';
import logo from '@/assets/logo.png';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <SplashScreen
        logoSrc={logo.src}
        logoAlt={INFO.APP_NAME}
        appName={INFO.APP_NAME}
        duration={2000}
        onComplete={() => {
          router.push('/login');
        }}
      />
    </div>
  );
}