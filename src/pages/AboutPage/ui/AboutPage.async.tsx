import { lazy } from 'react';

// export const AboutPageAsync = lazy(() => import('./AboutPage'));
export const AboutPageAsync = lazy(() => {
  const delayImport = new Promise((resolve) => {
    setTimeout(resolve, 4000);
  });

  return delayImport.then(() => import('./AboutPage'));
});
