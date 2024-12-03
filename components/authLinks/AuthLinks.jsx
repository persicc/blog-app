import React from "react";
import Link from "next/link";
import Button from "../button/Button";

function AuthLinks() {
  return (
    <div>
      <Link href={"/write"}>
        <Button>Write</Button>
      </Link>
    </div>
  );
}

export default AuthLinks;
