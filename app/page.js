"use client";

import Feed from "@/components/Feed/Feed";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="container">
        <Feed />
      </div>
    </div>
  );
}
