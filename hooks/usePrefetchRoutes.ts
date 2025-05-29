import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { STATIC_ROUTES } from '../routes';

export function usePrefetchRoutes() {
  const router = useRouter();
  useEffect(() => {
    STATIC_ROUTES.forEach((route) => {
      if (route !== router.pathname) {
        router.prefetch(route);
      }
    });
  }, [router]);
}
