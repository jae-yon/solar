import { useEffect, useState } from 'react';

import AppRoutes from '@/routes';

import Loading from '@/components/common/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App;
