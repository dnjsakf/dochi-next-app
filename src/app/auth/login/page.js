import { signOut, useSession } from 'next-auth/react';

import SignIn from './login';

export default function Page() {
  // const { data: session } = useSession();
  
  const handleSignOut = () => {
    signOut();
  };

  return (
    <div>
      {/* {session ? (
        <>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={handleSignOut}>Sign out</button>
        </>
      ) : (
        <SignIn />
      )} */}
      <SignIn />
    </div>
  );
}