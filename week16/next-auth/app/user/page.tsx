import { getServerSession } from "next-auth";
import React from "react";
import { AppBar } from "../../components/AppBar";
import { NEXT_AUTH } from "../../lib/auth";

export default async function () {
  const session = await getServerSession(NEXT_AUTH);
  return (
    <div>
      <AppBar />
      User component {JSON.stringify(session)}
    </div>
  );
}
