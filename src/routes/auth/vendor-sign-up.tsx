import VendorSignUpPage from '@/components/templates/auth/vendor-sign-up-page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/vendor-sign-up')({
  component: VendorSignUpPage,
});
