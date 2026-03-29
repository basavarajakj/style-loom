import AuthForm from '@/components/containers/auth/auth-form';
import { Link } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';

export default function SignUpPage() {
  const navigate = useNavigate();
  return (
    <div className='mx-auto w-full max-w-lg px-4 py-8'>
      <div className='space-y-2 text-center'>
        <h1 className='font-semibold text-2xl'>Create your account</h1>
        <p className='text-muted-foreground text-sm'>Sign up to get started</p>
      </div>
      <div className='mt-6'>
        <AuthForm
          mode='sign-up'
          onSuccess={() => navigate({ to: '/' })}
          includeSocial
        />
      </div>
      <p className='mt-4 text-center text-muted-foreground text-sm'>
        Already have an account?{' '}
        <Link
          to='/auth/sign-in'
          className='underline'
        >
          Sign in
        </Link>
      </p>
      <p className='mt-4 text-center text-muted-foreground text-sm'>
        Want to sell on our platform?{' '}
        <Link
          to='/auth/vendor-sign-up'
          className='underline'
        >
          Register as a Vendor
        </Link>
      </p>
    </div>
  );
}
