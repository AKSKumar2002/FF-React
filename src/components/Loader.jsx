import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="text-center px-6">
        <h1 className="loader-title font-extrabold tracking-tight text-5xl md:text-6xl lg:text-7xl">
          <span className="fiber">Fiber</span>
          <span className="flow">Flow</span>
        </h1>
        <div className="loader-spinner mx-auto mt-8" role="status" aria-label="loading"></div>
      </div>
    </div>
  );
}
