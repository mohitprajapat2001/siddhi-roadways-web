import React from "react";

const Preloader = () => {
  return (
    <div className="w-screen h-screen bg-base-300 flex justify-center items-center">
      <span className="loading loading-bars loading-xs bg-primary"></span>
      <span className="loading loading-bars loading-sm bg-primary"></span>
      <span className="loading loading-bars loading-md bg-primary"></span>
      <span className="loading loading-bars loading-lg bg-primary"></span>
    </div>
  );
};

export default Preloader;
