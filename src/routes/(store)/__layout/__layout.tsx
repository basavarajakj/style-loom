import Header from '@/components/base/common/header';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(store)/__layout/__layout')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
