"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function ProtectedRoutes({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/signIn");
    } else {
      router.push("/");
    }
  }, [user]);

  return <>{children}</>;
}

export default ProtectedRoutes;
