'use client';
import { ProgressProvider } from '@bprogress/next/app';
import '@bprogress/core/css';
import { useEffect } from 'react';
import { useProgress } from '@bprogress/next';
import { usePathname } from 'next/navigation';

const BarProgressProvider = ({ children }) => {
  return (
    <ProgressProvider
      height="3px"
      color="#00B584"
      options={{ showSpinner: false }}
    >
      {children}
    </ProgressProvider>
  );
};

export default BarProgressProvider;