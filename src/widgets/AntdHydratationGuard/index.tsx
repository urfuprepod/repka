'use client';

import { useEffect, useState } from 'react';
import { ConfigProvider, Spin } from 'antd';

export default function AntdHydrationGuard({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.setAttribute('data-antd-loaded', 'true');
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          motion: true, // Включаем анимации AntD
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}