"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/store/store';
import CustomLoader from '@/components/CustomLoader';

const WithAuth = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, token, checkAuthentication } = useAuth();
  const [isAuthResolved, setIsAuthResolved] = useState(false);

  useEffect(() => {
    const resolveAuth = async () => {
      await checkAuthentication();
      setIsAuthResolved(true);
    };

    resolveAuth();
  }, [checkAuthentication]);

  useEffect(() => {
    if (isAuthResolved && (!isAuthenticated || !token)) {
      router.push('/auth/login');
    }
  }, [isAuthResolved, isAuthenticated, token, router]);

  if (!isAuthResolved) {
    return <CustomLoader />;
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return null;
};

export default WithAuth;
