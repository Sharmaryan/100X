"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export const AppBar = () => {
  const session =  useSession()
  return (
    <>
      <button
        onClick={() => {
          signIn()
        }}
      >
        sign in
      </button>
      <br />
      <button
        onClick={() => {
          signOut()
        }}
      >
        logout
      </button>
      {JSON.stringify(session)}
    </>
  );
};
