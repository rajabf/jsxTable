import React, { useState } from "react";

const Counter = () => {
  const [userName, setUserName] = React.useState("John");

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1
          className="text-3xl"
          onClick={() => setUserName("Rajab")}
          role="button"
        >
          {userName}
        </h1>
      </div>
    </section>
  );
};

export default Counter;
