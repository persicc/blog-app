"use client";

import Feed from "@/components/Feed/Feed";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="container">
        <Feed />
      </div>
    </div>
  );
}
