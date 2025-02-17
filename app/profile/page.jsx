"use client";

import useUser from "@/hooks/useUser";
import React from "react";

function ProfilePage() {
  const { user } = useUser();

  return <div>{user.email}</div>;
}

export default ProfilePage;
