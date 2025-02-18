"use client";

import { AuthModalContext } from "@/context/AuthModalContext";
import useUser from "@/hooks/useUser";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

function ProtectedRoutes({ children }) {
  const { user, loading } = useUser();
  const { setOpen } = useContext(AuthModalContext);
  const path = usePathname();

  useEffect(() => {
    if (!loading && !user && path != "/signIn") setOpen(true);
    if (path == "/signIn") setOpen(false);
    console.log(path);
  }, [user, loading, path]);

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
