"use client";

import { setCookie } from "cookies-next";
import { LegacyRef, useRef } from "react";

export default function TokenSetter() {
  const inputRef = useRef<HTMLInputElement>();
  const handleSetToken = () => {
    const value = inputRef.current?.value || "token-value-from-dot-vam-domain";
    setCookie("token", value, { domain: "adriantdc.com" });
    //setCookie("token", value);
  };
  return (
    <div className='flex gap-2'>
      <input ref={inputRef as unknown as LegacyRef<HTMLInputElement>} type='text' className='text-black px-2' placeholder='value' />
      <button onClick={handleSetToken} className='p-2 bg-white text-black'>
        Set Token
      </button>
    </div>
  );
}
