"use client";

import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

function ProtectedRoutes({ children }) {
  const { currentUser, isLoading } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (isLoading == false) {
      console.log("Redirecting...");
      if (currentUser) {
        router.push("/");
      } else {
        router.push("/signIn");
      }
    }
  }, []);

  return children;
}

export default ProtectedRoutes;
