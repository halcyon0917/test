"use client";

import { setCookie } from "cookies-next";

export default function HomePage() {
  const handleSetToken = () => {
    setCookie("token", "from-dot-vam", { domain: "adriantdc.com" });
  };
  return (
    <main>
      <div>Test Vam Web App</div>
      <button onClick={handleSetToken} className='p-2 bg-white text-black'>
        Set Token
      </button>
    </main>
  );
}
