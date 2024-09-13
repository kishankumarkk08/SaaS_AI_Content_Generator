"use client"
import { useUser } from '@clerk/nextjs';


export const getUser = () => {
  const { user, isLoaded, isSignedIn } = useUser();


  if (isLoaded && isSignedIn) {
    return user;
  }

  return null;
};