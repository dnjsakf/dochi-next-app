"use client";

import { signIn, getProviders } from 'next-auth/react';

const SignIn = ({ providers }) => {
  return (
    <div>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </div>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignIn;