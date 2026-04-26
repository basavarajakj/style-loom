import { betterAuth } from 'better-auth';
import { admin, twoFactor } from 'better-auth/plugins';
import { tanstackStartCookies } from 'better-auth/tanstack-start';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/lib/db';
import {
  account,
  session,
  user,
  verification,
  twoFactor as twoFactorTable,
} from './db/schema/auth-schema';
import { sendEmail } from './email';
import OtpEmail from './emails/otp-email';

export const auth = betterAuth({
  basePath: '/api/auth', // Base path where auth routes are mounted

  appName: 'Shop Loom',

  secret: process.env.BETTER_AUTH_SECRET ?? 'dev-secret',
  trustedOrigins: [
    // local development
    process.env.VITE_BETTER_AUTH_URL!,
    // Optionally add your production app URL via env
    ...(process.env.BETTER_AUTH_URL ? [process.env.BETTER_AUTH_URL] : []),
  ],
  emailAndPassword: {
    enabled: true,
    disableSignUp: false,
    requireEmailVerification: false,
    minPasswordLength: 8,
    maxPasswordLength: 128,
    autoSignIn: true,
  },

  // Advanced security options
  advanced: {
    useSecureCookies: process.env.NODE_ENV === 'production',
    defaultCookieAttributes: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    },
    disableCSRFCheck: false,
    ipAddress: {
      // Ensure rate limit/session IP tracking works behind proxy/CDN's if applicable
      ipAddressHeaders: ['x-forwarded-for', 'cf-connecting-ip'],
    },
  },
  // Built in rate limiting
  rateLimit: {
    enabled: true,
    window: 60,
    max: 100,
    // Use in-memory storage to avoid missing DB tables in dev
    storage: 'memory',
    // Apply strict limits to sensitive endpoints
    customRules: {
      'sign-in/email': { window: 10, max: 3 },
      'sign-up/email': { window: 10, max: 3 },
    },
  },
  // Optional social providers
  socialProviders: {
    ...(process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET
      ? {
          github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
          },
        }
      : {}),
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
      ? {
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          },
        }
      : {}),
  },
  plugins: [
    admin({ defaultRole: 'customer' }),
    twoFactor({
      skipVerificationOnEnable: true,
      otpOptions: {
        async sendOTP({ user, otp }) {
          try {
            const result = await sendEmail({
              to: user.email!,
              subject: 'Your OTP Code',
              body: OtpEmail({
                otp,
                userName: user.name || user.email || 'User',
                expiresInMinutes: 5,
              }),
            });
            console.log('Email send successfully, MessageId', result.messageId);
          } catch (error) {
            console.error('Failed to send OTP email:', error);
            throw new Error('Failed to send verification code');
          }
        },
      },
    }),
    tanstackStartCookies(),
  ],

  // Drizzle adapter with explicit schema mapping
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      user,
      account,
      session,
      verification,
      twoFactor: twoFactorTable,
    },
  }),
});
