import { QueryClient } from '@tanstack/react-query';
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query';
import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { DefaultErrorComponent } from './components/base/default-error-component';
import NotFound from './components/base/not-found';

export function getRouter() {
  const queryClient = new QueryClient();
  const router = createTanStackRouter({
    routeTree,

    context: {
      queryClient,
    },
    scrollRestoration: true,
    defaultErrorComponent: DefaultErrorComponent,
    defaultNotFoundComponent: () => <NotFound />,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
  });

  setupRouterSsrQueryIntegration({ router, queryClient });

  return router;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
