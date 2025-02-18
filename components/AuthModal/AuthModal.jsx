"use client";

import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import { AuthModalContext } from "@/context/AuthModalContext";
import Link from "next/link";

function AuthModal() {
  const { open } = useContext(AuthModalContext);
  return (
    <Modal open={open}>
      <div>
        <Link href={"/signIn"}>
          <button>SignIn</button>
        </Link>
      </div>
    </Modal>
  );
}

export default AuthModal;
