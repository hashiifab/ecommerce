import React from 'react';
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="sign-up-container">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}