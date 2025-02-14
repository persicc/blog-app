"use client";

import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function ProtectedRoutes({ children }) {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) router.push("/signIn");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return children;
}

export default ProtectedRoutes;
